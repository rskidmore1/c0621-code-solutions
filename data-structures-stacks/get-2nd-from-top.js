/* exported get2ndFromTop */

function get2ndFromTop(stack) {
  let top;
  let secondFromTop;
  if (stack.peek() !== undefined) {
    top = stack.peek();
    stack.pop();
    if (stack.peek() !== undefined) {
      secondFromTop = stack.peek();
      stack.push(top);
      return secondFromTop;
    }
    stack.push(top);
  }

  return undefined;

}
