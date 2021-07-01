/* exported sumAll */

function sumAll(numbers) {
  var sum = 0;
  var count = 0;
  while (count <= numbers.length - 1) {
    sum += numbers[count];
    count++;
  }
  return sum;
}
