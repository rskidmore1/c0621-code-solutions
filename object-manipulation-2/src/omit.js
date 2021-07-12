/* exported omit */

// Enters loop for sources
// CHecks if item is inclued in keys
// If not pushes to newOjb

function omit(source, keys) {
  var newObj = {};

  for (var item in source) {
    if (keys.includes(item) === false) {
      newObj[item] = source[item];
    }
  }

  return newObj;
}
