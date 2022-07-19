// Random Cocktail API
citySearchBtn.onclick = async function getApi(event) {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '6e6c108975msh9698f923c48000cp144f87jsnf6fc9adea9d2',
            'X-RapidAPI-Host': 'cocktails3.p.rapidapi.com'
        }
    };
    
    let randomData = await getData('https://cocktails3.p.rapidapi.com/random', options);
    console.log("this is random", randomData);
    
    // Activates display function for cocktail name and ingredients list
    displayResultsList(randomData, randomData.body[0].name);
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
