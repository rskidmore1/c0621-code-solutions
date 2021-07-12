/* exported defaults */

// Add target keys to an array
// Enters loop over sources
// If source item is not included in target keys Array, add to target

function defaults(target, source) {
  var targetKeys = [];
  for (var key in target) {
    targetKeys.push(key);
  }

  for (var item in source) {
    if (targetKeys.includes(item) === false) {
      target[item] = source[item];
    }
  }
}
