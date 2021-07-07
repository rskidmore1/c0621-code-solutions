/* exported compact */

// dec func
// dec var array contains[] containing elements to omit: false, null, NaN, 0, -0, '',
// dec array var newArray
// Enter loop
// change is each item in arg array is truthy with an if statement
// Push items that are truthy to newArray

function compact(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i]) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
