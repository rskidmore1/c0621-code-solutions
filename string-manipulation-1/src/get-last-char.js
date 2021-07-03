/* exported getLastChar */

// declare function
// take in string
// declare new var
// Find last index of string
// declare new var for last index
// find length of string
// Subtract 1 from string length
// get last element by index via bracket notation

function getLastChar(string) {
  var newString = '';
  var lastIndex = string.length - 1;
  newString = string[lastIndex];
  return newString;
}
