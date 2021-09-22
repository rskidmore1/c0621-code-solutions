/* exported takeNextSmallest */

function takeNextSmallest(queue) {

  if (queue.peek() !== undefined) {
    let successorGreater = true;
    let current = null;
    while (successorGreater) {
      current = queue.dequeue();

      if (queue.peek() === undefined) {
        successorGreater = false;
        return current;
      }

      if (current < queue.peek()) {
        successorGreater = false;

        return current;
      }
      queue.enqueue(current);
    }

  }

}
