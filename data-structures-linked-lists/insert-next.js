/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported insertNext */

function insertNext(list, value) {

  const one = list.data;
  const two = list.next.data;
  const three = list.next.next.data;
  const four = list.next.next.next.data;

  list.data = one;
  list.next.data = value;
  list.next.next.data = two;
  list.next.next.next.data = three;
  list.next.next.next.next = new LinkedList(four);
}
