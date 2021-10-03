/* exported updateNext */

function updateNext(list, value) {
  // debugger;

  if (list.next !== null) {
    list.next.data = value;
  }

}
