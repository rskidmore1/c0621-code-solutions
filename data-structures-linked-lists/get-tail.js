/* exported getTail */

function getTail(list) {

  let data;
  let current = list;

  while (current) {
    data = current.data;

    current = current.next;

  }

  return data;

}
