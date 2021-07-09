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
      case 'e':
      case 'i':
      case 'o':
      case 'u':
        counter++;
        break;
    }

  }

  return counter;
}
