/* exported takeValueAtIndex */

function takeValueAtIndex(queue, index) {
  let returnvalue = null;
  for (let i = 0; i <= index; i++) {
    if (index === i) {
      returnvalue = queue.dequeue();
      return returnvalue;
    } else {
      returnvalue = queue.dequeue();
      queue.enqueue(returnvalue);
    }

  }
}
