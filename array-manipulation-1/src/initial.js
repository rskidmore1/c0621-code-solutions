/* exported initial */

// dec func
// Enter loop over array.length - 1 to skip the last item
// Push items to array

function initial(array) {
  var newArray = [];
  for (var i = 0; i < array.length - 1; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
