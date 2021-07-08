/* exported firstChars */

// same thing as truncate with out the "..."

function firstChars(length, string) {
  var newString = string.slice(0, length);

  return newString;

}
