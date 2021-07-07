/* exported reverseWord */

// dec func
// dec string var reverseWord
// decrement loop over word as Array
// push values to reverseWord
// return reverseWord
// ...

function reverseWord(word) {
  var revWord = '';
  var len = word.length - 1;
  for (var i = len; i >= 0; i--) {
    revWord += word[i];
  }
  return revWord;
}
