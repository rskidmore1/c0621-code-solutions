/* exported take */

// Enters loop set to i < count
// Push elements to new array

function take(array, count) {
  var newArray = [];
  for (var i = 0; i < count; i++) {
    if (count < array.length) {
      newArray.push(array[i]);
    }

  }
  return newArray;
}
