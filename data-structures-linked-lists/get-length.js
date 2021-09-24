/* exported getLength */

function getLength(list) {
  let count = 1;

  let current = list.next;
  while (current) { // while not null
    count++;
    current = current.next;
  }

  return count;
}
