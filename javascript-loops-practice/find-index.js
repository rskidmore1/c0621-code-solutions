/* exported findIndex */

function findIndex(array, value) {
  var containsval = -1;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      containsval = i;
      break;
    }
  }
  return containsval;
}
