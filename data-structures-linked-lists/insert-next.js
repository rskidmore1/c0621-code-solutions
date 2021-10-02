/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported insertNext */

function insertNext(list, value) {

  const list2 = new LinkedList(value);
  list2.next = list.next;
  list.next = list2;

}
