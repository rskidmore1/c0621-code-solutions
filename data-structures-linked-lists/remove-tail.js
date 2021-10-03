/* exported removeTail */

function removeTail(list) {

  let current = list;
  if (current.next !== null) {
    while (current.next.next) {
      current = current.next;
    }
    current.next = null;
  }
}
