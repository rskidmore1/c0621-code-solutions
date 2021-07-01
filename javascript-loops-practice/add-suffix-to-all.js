/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  for (var i = 0; i < words.length; i++) {
    var newWord = words[i] + suffix;
    words[i] = newWord;
  }
  return words;
}
