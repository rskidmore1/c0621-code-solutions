/* exported capitalizeWords */

// dec new var array
// Split string buy ' ', assigns to array
// Enters loop over array
// Make first index of item of array upperCase.
// Adds back to string
// returns string

function capitalizeWords(string) {
  var array = [];
  var newWord = '';
  var newString = '';
  array = string.split(' ');
  for (var i = 0; i < array.length; i++) {
    newWord = array[i][0].toUpperCase() + array[i].slice(1, array[i].length).toLowerCase();
    newString += ' ' + newWord;
  }
  string = newString.trim();
  return string;
}
