/* exported getIndexes */
function getIndexes(array) {
  var numbers = [];
  var count = 0;
  while (count < array.length) {
    numbers.push(count);
    count++;
  }
  return numbers;
}
