/* exported union */
// join first and second
// enter loop over array compare it to every other item if it
// doesn't match any other its push it to unquieArr
// How to account for rpeast items later in the thing?
// First instance if the index of the repeat it is hirer than current number break and push the current number to index
// If the current number finds a repeat at a lower index just break
function union(first, second) {
  var array = first.concat(second);

  var uniqueArr = [];

  for (var i = 0; i < array.length; i++) {

    for (var j = 0; j < array.length; j++) {
      if (uniqueArr.includes(array[i]) === true) {
        null;
      } else if (i === j) {
        uniqueArr.push(array[i]);
        break;
      } else if (array[i] === array[j]) {
        null;

      } else if (array[i] !== array[j]) {
        uniqueArr.push(array[i]);
        break;
      }
    }

  }
  return uniqueArr;

}
