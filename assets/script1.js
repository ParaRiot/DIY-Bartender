// Constant for youtube API Key
const youtubeApiKey = 'AIzaSyDwqNTOnesmX68ISLWg0AwyCXPGZWwlpCY'



// Function to display results
async function displayResultsList(resultData) {
    // console.log("Made to method", resultData[0].ingredients);

    let resultsContainerDiv = document.getElementById('result-box-Container');

    // let resultsTwoContainerDiv = document.getElementById('result-box-Container-two');
    // let resultsThreeContainerDiv = document.getElementById('result-box-Container-three');

    // Drink results to pull


    // let newListUlTwo = document.createElement('ol');
    // newListOlTwo.id = 'cocktail-info-content-two';

    // let newListUlThree = document.createElement('ol');
    // newListOlThree.id = 'cocktail-info-content-three';

    for (var i = 0; i < 3; i++){
        let resultsOneContainerDiv = await cocktailResultOne(resultData[i]);
        let cocktailName = resultData[i].name;
        let youtubeDataSrc = await getYoutubeUrl(cocktailName);

        // console.log("this is cocktailName", cocktailName);
        resultsContainerDiv.appendChild(resultsOneContainerDiv);

        resultsOneContainerDiv.appendChild(youtubeDataSrc);
    }

    // for (var i = 0; i < resultData[0]; i++) {
    //     let newListItem = document.createElement('li');
    //     newListItem.textContent = data.ingredients[i];
    //     newListItem.id = data[0].ingredients[i];
    //     newListUl.appendChild(newListItem);
    // }

    // let resultHeader = document.createElement('h2');

    // // Makes header and appends to main results container div
    // resultHeader.id = "cocktail-name";
    // resultHeader.textContent = cocktailName;
    // resultsOneContainerDiv.appendChild(resultHeader);
    // resultsContainerDiv.appendChild(newListUl);

}

async function cocktailResultOne(resultData) {

    let resultsOneContainerDiv = document.createElement('div');
    resultsOneContainerDiv.id = "result-one-container";

    let newListOlOne = document.createElement('ol');
    newListOlOne.id = 'cocktail-info-content-one';

    for (var i = 0; i < resultData.ingredients.length; i++) {
        let newListItemOne = document.createElement('ul');
        newListItemOne.textContent = resultData.ingredients[i];
        console.log("This is ingredients", resultData.ingredients[i]);
        newListItemOne.id = resultData.ingredients[i];
        newListOlOne.appendChild(newListItemOne);
    }
    let resultOneHeader = document.createElement('h2');

    // Makes header and appends to main results container div
    resultOneHeader.id = "cocktail-name-one";
    resultOneHeader.textContent = resultData.name;
    resultsOneContainerDiv.appendChild(resultOneHeader);
    resultsOneContainerDiv.appendChild(newListOlOne);
    // console.log("This is results container", resultsOneContainerDiv);
    return resultsOneContainerDiv;
    
}

// async function cocktailResultTwo(resultData) {
//     for (var i = 0; i < resultData[1]; i++) {
//     let newListItemTwo = document.createElement('ul');
//     newListItemTwo.textContent = data.ingredients[i];
//     newListItemTwo.id = resultData[1].ingredients[i];
//     newListOlOne.appendChild(newListItem);
// }
// }

async function getYoutubeUrl(cocktailName){
    // Start of YouTube API section
    const options = {
        method: 'GET'
    };    

    //Section to pull YouTube API
    var url = new URL("https://www.googleapis.com/youtube/v3/search");

    var data = {
        "key": youtubeApiKey,
        "part": "snippet",
        "q": "how to make a " + cocktailName + ", cocktail",
        "maxResults": 1,
    }
    // For loop for params, alters youtube link to match what random drink was pulled, then creates a how to video using the video id
    for (let k in data) { url.searchParams.append(k, data[k]); }
    // console.log("This is URL", url.toString());
    let youtubeData = await (await fetch(url)).json();
    // console.log("this is youtube", youtubeData);
    let youtubeDataSrc = document.createElement('a');
    youtubeDataSrc.textContent = 'https://www.youtube.com/watch?v=' + youtubeData.items[0].id.videoId;
    youtubeDataSrc.href = 'https://www.youtube.com/watch?v=' + youtubeData.items[0].id.videoId;

    return youtubeDataSrc;
    // Appends youtube link to main results container div
}