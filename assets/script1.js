// Constant for youtube API Key
const youtubeApiKey = 'AIzaSyDwqNTOnesmX68ISLWg0AwyCXPGZWwlpCY'

// Function to display results
async function displayResultsList(data, cocktailName) {
    console.log("Made to method", data.body[0].ingredients);

    let resultsContainerDiv = document.getElementById('result-box-Container');
    // Drink results to pull
    let newListUl = document.createElement('ol');
    newListUl.id = 'cocktail-info-content';
    for (var i = 0; i < data.body[0].ingredients.length; i++) {
        let newListItem = document.createElement('li');
        newListItem.textContent = data.body[0].ingredients[i];
        newListItem.id = data.body[0].ingredients[i];
        newListUl.appendChild(newListItem);
    }

    let resultHeader = document.createElement('h2');

    // Makes header and appends to main results container div
    resultHeader.id = "cocktail-name";
    resultHeader.textContent = cocktailName;
    resultsContainerDiv.appendChild(resultHeader);
    resultsContainerDiv.appendChild(newListUl);

    const options = {
        method: 'GET'
    };    
    
    
    //Section to pull youtube API
    var url = new URL("https://www.googleapis.com/youtube/v3/search");

    var data = {
        "key": youtubeApiKey,
        "part": "snippet",
        "q": "how to make " + cocktailName,
        "maxResults": 1,
    }
    // For loop for params, alters youtube link to match what random drink was pulled, then creates a how to video using the video id
    for (let k in data) { url.searchParams.append(k, data[k]); }
    console.log("This is URL", url.toString());
    let youtubeData = await (await fetch(url)).json();
    console.log("this is youtube", youtubeData);
    let youtubeDataSrc = document.createElement('a');
    youtubeDataSrc.textContent = 'https://www.youtube.com/watch?v=' + youtubeData.items[0].id.videoId;
    youtubeDataSrc.href = 'https://www.youtube.com/watch?v=' + youtubeData.items[0].id.videoId;

    // Appends youtube link to main results container div
    resultsContainerDiv.appendChild(youtubeDataSrc);
}
