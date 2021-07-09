/* exported dropRight */

// Condition is i < array.length - count to push everything to array before arg count indicates to stop

function dropRight(array, count) {
  var newArray = [];
  for (var i = 0; i < array.length - count; i++) {

    newArray.push(array[i]);

  }
  return newArray;
}
