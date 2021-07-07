/* exported isLowerCased */

// Take in argument word
// Declare bool var for if there is any upper case letter in arg
// Iterate through loop
// if letter is upper case set bool var to false
//   Condition: is value of current letter equal to current letter set toLowerCase
// ...

function isLowerCased(word) {
  var lowercased = true;
  for (var i = 0; i < word.length; i++) {

    if (word[i] !== '-') {
      if (word[i] === word[i].toUpperCase()) {
        lowercased = false;

        break;
      }
    }
  }
  return lowercased;
}
