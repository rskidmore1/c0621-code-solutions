/* exported take2nd */

function take2nd(queue) {
  if (queue.peek() !== undefined) {
    const front = queue.dequeue();
    if (queue.peek() !== undefined) {
      const second = queue.dequeue();
      queue.enqueue(front);
      return second;
    } else {
      return front;
    }
  }
}
