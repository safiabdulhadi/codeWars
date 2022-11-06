/*
Sentence Smash
Write a function that takes an array of words and smashes them together into a sentence and returns the sentence.
You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word.
 Be careful, there shouldn't be a space at the beginning or the end of the sentence!
*/

//Smash Words
//One
smash = function (words) {
    return words.join(" ");
  };

  // Smash Words
  //2
const smash = words => words.join(' ');


// Smash Words
//3 Way
function smash (words) {
    "use strict";
    var smashed = '';
    for(var i = 0; i<words.length; i++) {
      smashed += words[i];
      if(i!=words.length-1) {
        smashed += ' ';
      }
    }
    return smashed;
};