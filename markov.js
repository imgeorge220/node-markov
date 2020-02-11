/** Textual markov chain generator */

let _ = require('lodash');


class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    this.chains = this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    let result = {};

    for (let index in this.words) {
      let nextWord = this.words[+index + 1] || null;

      if (result[this.words[index]]) {
        result[this.words[index]].push(nextWord);
      } else {
        result[this.words[index]] = [nextWord];
      }
    }

    return result;
  }


  /** return random text from chains */

  makeText(numWords = 100) {
    let count = 0;
    let currentWord = _.sample(this.words);
    let text = currentWord;
    let nextWord;

    while (count < numWords) {
      nextWord = _.sample(this.chains[currentWord]);
      
      if (!nextWord) {
        return text;
      };
      
      text += ` ${nextWord}`;
      currentWord = nextWord;
      count++;
    }

    return text;
  }
}
let mm = new MarkovMachine(text);