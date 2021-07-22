/* exported difference */

// enter loop for first
// if first[i] is not included in second push to diffArr
// visa versa
//

function difference(first, second) {
  var diffArr = [];

  for (var i = 0; i < first.length; i++) {
    if (second.includes(first[i]) === false) {
      diffArr.push(first[i]);
    }
  }
  for (var j = 0; j < second.length; j++) {
    if (first.includes(second[j]) === false) {
      diffArr.push(second[j]);
    }
  }
  return diffArr;
}
