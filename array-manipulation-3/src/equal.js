/* exported equal */

// first compares length of each array
// Enter loop based on shared length
// Compares array1[i] to array2[i]
// if not equal returns false

function equal(first, second) {
  var isEqual = false;
  if (first.length === second.length) {
    isEqual = true;
    var sharedLength = first.length;
    for (var i = 0; i < sharedLength; i++) {
      if (first[i] !== second[i]) {
        isEqual = false;
        break;
      }
    }
  }
  return isEqual;
}
//
