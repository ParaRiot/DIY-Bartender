var apiEndpoint = "https://www.googleapis.com/youtube/v3/search?part=snippet&q=dogs&maxResults=1 ";


// responsible for making API call
function getAPI() {
  fetch(apiEndpoint)
  .then(function(res) {
    return res.json()
  })
  .then(function(data) {
    // do something with that data
    console.log(data)
  })
}

getAPI()