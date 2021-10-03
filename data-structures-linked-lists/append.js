/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported append */

function append(list, value) {
  let data;
  let current = list;
  while (current) {

    data = current;
    current = current.next;
  }

  data.next = new LinkedList(value);

}
