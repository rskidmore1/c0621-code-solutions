/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  var newWords = [];
  for (var i = 0; i < words.length; i++) {
    var newWord = words[i] + suffix;
    newWords.push(newWord);
  }
  return newWords;
}
