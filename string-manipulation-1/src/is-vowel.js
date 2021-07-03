/* exported isVowel */

// def func
// Take char augument
// Sets char arg to lower case
// Declares var isVowel= false
// Enters loop set to length of array with vowels
// Compares to array of vowels
// if char is equal to vowls array item, isVowel set equal to true and breaks loop

function isVowel(char) {
  var isVowel = false;
  var lowerChar = char.toLowerCase();
  var array = ['a', 'e', 'i', 'o', 'u'];
  for (var i = 0; i < array.length; i++) {
    if (lowerChar === array[i]) {
      isVowel = true;
      break;
    }
  }
  return isVowel;
}
