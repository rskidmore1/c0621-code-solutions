/* exported getWords */

// declares func
// Takes string
// Declares array words
// splits string by ' ' and assigns to words
// returns words array

function getWords(string) {
  var words = null;
  words = string.split(' ');
  if (words.length === 1) {
    if (words[0] === '') {
      words = [];
    }
  }
  return words;
}
