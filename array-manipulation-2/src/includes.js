/* exported includes */

// Enters loops compares current item to arg value

function includes(array, value) {
  var inc = false;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      inc = true;
      break;
    }
  }
  return inc;
}
