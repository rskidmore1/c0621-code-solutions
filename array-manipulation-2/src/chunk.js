/* exported chunk */

// Enters loop
// Enters if statement, if counter < size,
// Pushes item to var subArray
// increments coutner + 1
// After counter = size subarray is pushed to largeArray
// Enters if statement, if array.length % size !== 0 && stinri === array.length - 1 push array[i]  to largeArray

function chunk(array, size) {
  var subArray = [];
  var largeArray = [];
  var counter = 0;
  var leftOvers = [];

  for (var i = 0; i < array.length; i++) {

    if (array.length % size !== 0 && i === array.length - 1) {
      leftOvers.push(array[i]);
      largeArray.push(leftOvers);

    }

    if (counter < size) {
      subArray.push(array[i]);
      counter += 1;

    }
    if (counter === size) {
      largeArray.push(subArray);
      subArray = [];
      counter = 0;
    }

  }

  return largeArray;
}
