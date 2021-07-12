/* exported pick */

// Enter loop over keys
// Enter nested loop over source
// Compares keys-items to keys of source-items
// Pushes matching items to keysArray
function pick(source, keys) {
  var keysArray = {};

  for (var i = 0; i < keys.length; i++) {
    for (var item in source) {
      if (keys[i] === item && source[item] !== undefined) {
        keysArray[item] = source[item];

      }
    }
  }

  return keysArray;
}
