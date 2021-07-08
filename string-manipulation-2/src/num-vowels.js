/* exported numVowels */

// dec num var counter
// Enter loop
// Create switch statement that finds vowels
// case increments counter
// return counter

function numVowels(string) {
  var counter = 0;
  for (var i = 0; i < string.length; i++) {

    switch (string[i].toLowerCase()) {
      case 'a':
        counter++;
        break;
      case 'e':
        counter++;
        break;
      case 'i':
        counter++;
        break;
      case 'o':
        counter++;
        break;
      case 'u':
        counter++;
        break;
      default:

    }

  }

  return counter;
}
