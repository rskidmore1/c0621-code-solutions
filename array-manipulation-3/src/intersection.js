/* exported intersection */

// enter loop over first
// if first[i] is true push to intArr

function intersection(first, second) {
  var intArr = [];

  for (var i = 0; i < first.length; i++) {
    if (second.includes(first[i]) === true) {
      intArr.push(first[i]);
    }
  }
  return intArr;
}
