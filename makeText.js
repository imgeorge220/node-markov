/** Command-line tool to generate Markov text. */

const fs = require('fs');
const axios = require('axios');
const argv = process.argv; // shows array of each command line argument/keyword

function cat(path) {

  try {
    return fs.readFileSync(path, 'utf8');
  }
  catch (err) {
    console.log(`Error reading ${path}: `);
    console.log(`   ${err}`);
    process.exit(1);
  }
}

async function webCat(url) {

  axios.get(url)
    .then(function (resp) {
      return resp.data;
    })
    .catch(function (err) {
      console.log(`Error fetching ${url}: `);
      console.log(`   ${err}`);
    })
}

// if (argv[2] === 'url') {
//   webCat(argv[3]);
// } else {
//   cat(argv[3]);
// }

module.exports = {
  cat: cat,
  webCat: webCat
}
