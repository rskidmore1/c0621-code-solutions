/* exported postpone */

function postpone(queue) {
  if (queue.peek() !== undefined) {
    const back = queue.dequeue();
    queue.enqueue(back);
  }
}
