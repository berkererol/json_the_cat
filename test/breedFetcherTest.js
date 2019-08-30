const { getBreedByDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed', (done) => {
    getBreedByDescription('Siberian', (err, desc) => {
    
      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors. ";

      // compare returned description
      assert.equal(expectedDesc, desc);

      done();
    });
  });
  it('returns an error if the breed is not known.', (done) => {
    getBreedByDescription('foo', (err, desc) => {

      assert.exists(err);
      assert.equal(undefined, desc);
      done();
    });
  });
});