/* exported lastChars */

// using slice, start from string.length minus arg length to string.length

function lastChars(length, string) {
  var newString = '';
  if (length > string.length) {
    newString = string;
  } else {
    newString = string.slice(string.length - length, string.length);
  }

  return newString;

}
