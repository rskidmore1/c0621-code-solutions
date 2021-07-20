/* exported unique */

// enter loop over array compare it to every other item if it
// doesn't match any other its push it to unquieArr
// How to account for rpeast items later in the thing?
// First instance if the index of the repeat it is hirer than current number break and push the current number to index
// If the current number finds a repeat at a lower index just break

function unique(array) {

  var uniqueArr = [];
  for (var i = 0; i < array.length; i++) {
    if (uniqueArr.indexOf(array[i]) === -1) {
      uniqueArr.push(array[i]);

    }
  }
  return uniqueArr;

}
