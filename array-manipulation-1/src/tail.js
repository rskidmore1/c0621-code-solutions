/* exported tail */

// dec func
// Dec array var arrayTail
// Enter loop over length of arg array, start counter at 1 to skip the first index
// Push itme to arrayTail

function tail(array) {
  var arrayTail = [];
  for (var i = 1; i < array.length; i++) {
    arrayTail.push(array[i]);
  }
  return arrayTail;
}
