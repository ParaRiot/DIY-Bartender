var searchBtn = document.getElementById('searchBtn');

// Based on ingredient input - Cocktail API
searchBtn.onclick = async function getApi(event) {
    var input = document.getElementById('ingredientInput').value;

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '6e6c108975msh9698f923c48000cp144f87jsnf6fc9adea9d2',
            'X-RapidAPI-Host': 'cocktail-by-api-ninjas.p.rapidapi.com'
        }
    };
    
    var cocktailURL = 'https://cocktail-by-api-ninjas.p.rapidapi.com/v1/cocktail?name=' + input;
    let resultData = await getData(cocktailURL, options);
    console.log("this is data", resultData[0].name);
    
    // Activates display function for cocktail name and ingredients list
    await displayResultsList(resultData, input);
}

// Pulls cocktail random data 
async function getData(URL, options) {
    try {
        let res = await fetch(URL, options);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}
