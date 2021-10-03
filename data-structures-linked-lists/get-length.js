/* exported getLength */

function getLength(list) {
  let count = 1;

  let current = list.next;
  while (current) {
    count++;
    current = current.next;
  }

  return count;
}
