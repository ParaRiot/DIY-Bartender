
// Function to display results
async function displayResultsList(data, cocktailName) {

    // Drink results to pull
    var drinkResults = {

    }

    // YouTube results to pull
    var videoResults = {
        video: contents[0].video,
    }

    // Variables
    let resultBoxContainer = document.createElement('div');
    let resultDrinkHeader = document.createElement('h2');
    let resultDrinkInfo = document.createElement('p');
    let resultVideoLink = document.createElement('src');
    resultVideoLink.alt = 'YouTube Drink Video';
    // resultVideoLink.src = ;  ---- Need to pull src variable

    resultDrinkHeader.textContent = cocktailName + " Result";
    // resultDrinkInfo.textContent = drinkResults;
    
    // Appends children to main div
    resultBoxContainer.appendChild(resultDrinkHeader);
    resultBoxContainer.appendChild(resultDrinkInfo);
    resultBoxContainer.appendChild(resultVideoLink);

    //Adds new elements for results -- will update later

    // Assigns IDs -- will update later

    // Assigns inner text with data -- will update later

    // Appends results children -- will update later

}

// Displays other 2 or 3 results
async function displayAdditionalResults(data, cocktailName) {

    // Results variable for 2nd result
    var secondResult = {

    }
}