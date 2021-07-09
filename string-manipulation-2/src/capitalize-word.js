/* exported capitalizeWord */

// dec string var newWord
// set first index in word to upperCase
// enter loop lowerCase all letters second index onward
// if word is javascript assign new word to "JavaScript"
// Assign word to newWord because instrutions say to return word
// return arg word

function capitalizeWord(word) {
  var newWord = '';
  newWord += word[0].toUpperCase();
  for (var i = 1; i < word.length; i++) {
    newWord += word[i].toLowerCase();
  }
  if (word.toLowerCase() === 'javascript') {
    newWord = 'JavaScript';
  }
  return newWord;
}
