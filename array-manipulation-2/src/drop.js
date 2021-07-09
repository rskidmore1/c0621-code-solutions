/* exported drop */

// Enters loop, assign var i to count, set condition i < array.length
// Push elements to new array

function drop(array, count) {
  var newArray = [];
  for (var i = count; i < array.length; i++) {
    newArray.push(array[i]);

  }
  return newArray;
}
