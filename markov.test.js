const { MarkovMachine } = require("./markov");

describe('MarkovMachine gets created properly', function() {
  
  let mm = new MarkovMachine("this is a test this a");


  test('checks mMarkovMachine words array', function() {
    testWords = ["this", "is", "a", "test", "this", "a"]
    expect(mm.words).toEqual(testWords);
  });


  test('checks mMarkovMachine chains object', function() {
    testChains = {"this": ["is", "a"], 
                  "is": ["a"], 
                  "a": ["test", null], 
                  "test": ["this"]
                  }
    expect(mm.chains).toEqual(testChains);
  });


  test('checks MarkovMachine makeText() method', function() {
    let testText = mm.makeText(); 
    let testTextArr = testText.split(' ');
    let lastWord = testTextArr[testTextArr.length - 1];
    expect(lastWord).toEqual("a");
  });

  
  test('checks MarkovMachine makeText() method', function() {
    let testText = mm.makeText(1); 
    let testTextArr = testText.split(' ');
    expect(testTextArr.length).toEqual(1);
  });
  
});