/* exported invert */

// enter loop
// flip key and value, push to a newObj

function invert(source) {
  var newObj = {};
  for (var item in source) {
    newObj[source[item]] = item;
  }
  return newObj;
}
