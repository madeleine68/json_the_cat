const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(url, (error, response, body) => {
    if(error) {
     callback(`Failed url: ${error}`, null);
     return
    }
    const data = JSON.parse(body);
    if (breedName) {
      callback(error, data[0].description);
      } 
    callback(`Failed to find breed ${breedName}`, null) 
  });
}


module.exports = { fetchBreedDescription };




