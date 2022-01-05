const Artist = require("../models/artist");

/**
 * Finds the lowest and highest age of artists in the Artist collection
 * @return {promise} A promise that resolves with an object
 * containing the min and max ages, like { min: 16, max: 45 }.
 */

// let minage = minage();
// let maxage = maxage();
// console.log(minage, maxage);

module.exports = () => {
  const minQuery = Artist.find({})
    .sort({ age: 1 })
    .limit(1)
    .then((artist) => artist[0].age);

  const maxQuery = Artist.find({})
    .sort({ age: -1 })
    .limit(1)
    .then((artist) => artist[0].age);

  return Promise.all([minQuery, maxQuery]).then((result) => {
    return { min: result[0], max: result[1] };
  });
};

// function minage() {}

// function maxage() {
//   Artist.find({}).sort({ age: -1 }).limit(1);
// }
