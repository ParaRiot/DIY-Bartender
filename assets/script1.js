// Constant for youtube API Key
const youtubeApiKey = 'AIzaSyChuN6dBugIr8pK0mcxswqnbzdMmS7qjiE'

// Function to display results
async function displayResultsList(resultData) {
    let resultsContainerDiv = document.getElementById('result-box-Container');

    // For loop, stops at 3
    for (var i = 0; i < 3; i++){
        let resultsOneContainerDiv = await cocktailResultOne(resultData[i]);
        let cocktailName = resultData[i].name;
        let youtubeDataSrc = await getYoutubeUrl(cocktailName);

        resultsContainerDiv.appendChild(resultsOneContainerDiv);
        resultsOneContainerDiv.appendChild(youtubeDataSrc);
    }
}

// Displays cocktail results data
async function cocktailResultOne(resultData) {

    let resultsOneContainerDiv = document.createElement('div');
    resultsOneContainerDiv.className = "result-box";

    let newListOlOne = document.createElement('ol');
    newListOlOne.className = 'cocktail-info-content';

    // For loop for results data for all three calls, 
    for (var i = 0; i < resultData.ingredients.length; i++) {
        let newListItemOne = document.createElement('ul');
        newListItemOne.textContent = resultData.ingredients[i];
        newListItemOne.id = resultData.ingredients[i];
        newListOlOne.appendChild(newListItemOne);
    }
    let resultOneHeader = document.createElement('h2');

    // Makes header and appends to main results container div
    resultOneHeader.class = "cocktail-name";
    resultOneHeader.textContent = resultData.name;
    resultsOneContainerDiv.appendChild(resultOneHeader);
    resultsOneContainerDiv.appendChild(newListOlOne);
    return resultsOneContainerDiv;
}

// YouTube functionality, pulls YouTube API and appends results to results div bottom
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
    let youtubeData = await (await fetch(url)).json();
    let youtubeDataSrc = document.createElement('a');
    youtubeDataSrc.textContent = 'https://www.youtube.com/watch?v=' + youtubeData.items[0].id.videoId;
    youtubeDataSrc.href = 'https://www.youtube.com/watch?v=' + youtubeData.items[0].id.videoId;

    return youtubeDataSrc;
    // Appends youtube link to main results container div
}
