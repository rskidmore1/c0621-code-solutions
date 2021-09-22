/* exported takeNextSmallest */

function takeNextSmallest(queue) {
  // console.log(queue.print());

  // if (queue.peek() !== undefined) {
  //   // const first = queue.dequeue();
  //   const arr = [];
  //   while ((queue.peek() !== undefined)) {
  //     // console.log(queue.peek());
  //     arr.push(queue.dequeue());
  //   }
  //   // console.log(arr);
  //   const smallest = arr.shift();
  //   for (let i = 0; i < arr.length; i++) {
  //     if (smallest > arr[i]) {

  //     }
  //   }
  // }

  // if (queue.peek() !== undefined) {
  //   let smallest = queue.dequeue();
  //   const queue2 = new Queue();
  //   // console.log(queue.print());
  //   let count = 0;
  //   while (queue.peek() !== undefined) {
  //     count++;
  //     queue2.enqueue(queue.dequeue());
  //   }

  //   for (let i = 0; i < count; i++) {
  //     if (smallest > queue2.peek()) {
  //       queue.enqueue(smallest);
  //       smallest = queue2.dequeue();
  //     } else {
  //       queue.enqueue(queue2.dequeue());

  //     }
  //   }
  //   console.log(smallest);
  //   console.log('');
  //   return smallest;

  // }

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
