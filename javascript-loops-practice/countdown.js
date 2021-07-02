/* exported countdown */

function countdown(number) {
  var count = number;
  var numbers = [];
  while (count >= 0) {
    numbers.push(count);
    count--;
  }
  return numbers;
}
