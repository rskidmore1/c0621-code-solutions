/* exported initial */

// dec func 
// Find the length of array arg minus 1, assgin it to a var
// Remove last index 
// return remaining items 

function initial(array) {
  var lastIndex = array.length - 1;
  delete array[lastIndex];
  var newArray = [];
  for (var i = 0; i < array.length - 1; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
