/* exported takeRight */

// Enters loop
// i assigned array.length minus count
// Condition is i < array.length

function takeRight(array, count) {
  var newArray = [];
  for (var i = array.length - count; i < array.length; i++) {
    if (count < array.length) {
      newArray.push(array[i]);
    }

  }
  return newArray;
}
