/* exported zip */
// if statement for which list if sorter
// loop over shorter list
// Push to newArray shorter[i] then longer[i]

// passed all the tests the first try :)

function zip(first, second) {
  var shorter = [];
  var bigArray = [];
  if (first.length > second.length) {
    shorter = second;
  } else if (first.length < second.length) {
    shorter = first;
  } else if (first.length === second.length) {
    shorter = first;
  }

  for (var i = 0; i < shorter.length; i++) {
    var smallArray = [];
    smallArray.push(first[i]);
    smallArray.push(second[i]);
    bigArray.push(smallArray);
  }
  return bigArray;
}
