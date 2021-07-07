/* exported truncate */

// dec string var newString
// slice arg string from index 0 to arg length + 1
// Concat '...' to newString
// return newString

function truncate(length, string) {
  var newString = string.slice(0, length);
  newString += '...';
  return newString;

}
