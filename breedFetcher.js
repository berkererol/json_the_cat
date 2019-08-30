const request = require('request');
const args = process.argv.slice(2); //Getting command line inputs
const breedName = args[0];
const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

request(url, (error, response, body) => {

  if (error) {
    console.log(`Failed to request details: ${error}`)
  }

  if (JSON.parse(body).length === 0) {
    console.log(`\nCat breed is not found.\n`);
  }
  else {
    const data = JSON.parse(body); //Turning json packages to objects.
    console.log(data);
    const catDescription = data[0].description;

    catDescription ? console.log(catDescription) : console.log(`Failed to find breed ${breedName}`);

  }


});






















// request('http://api.thecatapi.com/v1/images/search?breed_id=', (error, response, body) => {
//   // console.log('error:', error); // Print the error if one occurred
//   // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   // console.log('body:', body); // Print the HTML for the Google homepage.
//   const data = JSON.parse(body);
//   const catDescription = data[0].breeds[0].description;
//   // console.log(typeof data);
//   // console.log(Object.keys(data));

// // });