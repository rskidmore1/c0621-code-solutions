/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported prepend */

function prepend(list, value) {

  const list2 = new LinkedList(value);
  list2.next = list;

  return list2;

}
