/* exported capitalize */

// Take in word
// Assign Argument "word" to a temp var
// Create for loop
// Iterate through temp var
// Make first index upper value
// Make follow index lower case
// Push values to original word
// Push values to original word
// return word
// ...

function capitalize(word) {
  var newWord = word;
  word = '';
  for (var i = 0; i < newWord.length; i++) {
    var tempLetter = '';
    if (i === 0) {
      tempLetter = newWord[i].toUpperCase();
      word += tempLetter;
    } else {
      tempLetter = newWord[i].toLowerCase();
      word += tempLetter;
    }
  }
  return word;
}
