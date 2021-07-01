/* exported includesSeven */

function includesSeven(array) {
  var isSevenIncl = false;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === 7) {
      isSevenIncl = true;
      break;
    }
  }
  return isSevenIncl;
}
