/* exported swapFront */

function swapFront(list) {
  if (list.next !== null) {
    const one = list.data;
    const two = list.next.data;
    list.data = two;
    list.next.data = one;
    return list;
  }
  return list;
}
