const { cat } = require('./makeText');
const { MarkovMachine } = require('./markov');

let words = cat('./eggs.txt');
mm = MarkovMachine(words);

