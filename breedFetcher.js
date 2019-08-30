const request = require('request');
const args = process.argv.slice(2); //Getting command line inputs
const breedName = args[0];


const getBreedByDescription = function (breedName, cb) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  return request(url, (error, response, body) => {
    if (error) {
      // console.log(`Failed to request details: ${error}`)
      cb(error, null);
    }

    if (JSON.parse(body).length === 0) {
      // console.log(`\nCat breed is not found.\n`);
      cb(null, 'Cat breed is not found');
    } else {

      const data = JSON.parse(body); //Turning json packages to objects.
      // const catDescription = data[0].description;
      // catDescription ? console.log(catDescription) : console.log(`Failed to find breed ${breedName}`);
      cb(null, data[0].description);
    }
  });
};

getBreedByDescription(breedName, (err, data) => {
  console.log(data);
});

module.exports = { getBreedByDescription };




















// request('http://api.thecatapi.com/v1/images/search?breed_id=', (error, response, body) => {
//   // console.log('error:', error); // Print the error if one occurred
//   // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   // console.log('body:', body); // Print the HTML for the Google homepage.
//   const data = JSON.parse(body);
//   const catDescription = data[0].breeds[0].description;
//   // console.log(typeof data);
//   // console.log(Object.keys(data));

// // });