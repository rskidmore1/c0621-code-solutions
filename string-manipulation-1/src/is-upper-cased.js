/* exported isUpperCased */

// Take in argument word
// Declare bool var for if there is any lower case letter in arg
// Iterate through loop
// if letter is lower case set bool var to false
//   Condition: is value of current letter equal to current letter set toLowerCase

function isUpperCased(word) {
  var uppercased = true;
  for (var i = 0; i < word.length; i++) {
    if (word[i] === word[i].toLowerCase()) {
      uppercased = false;

      break;
    }
  }
  return uppercased;
}
