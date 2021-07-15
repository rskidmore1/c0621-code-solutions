/* exported flatten */

// Enter loop
// chaeck of array[i] is object
// if true enter loop and push items to

function flatten(array) {
  var finalArray = [];
  for (var i = 0; i < array.length; i++) {
    if (typeof array[i] === 'object') {
      for (var j = 0; j < array[i].length; j++) {

        finalArray.push(array[i][j]);
      }
    } else {
      finalArray.push(array[i]);
    }
  }
  return finalArray;
}
