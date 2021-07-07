/* exported ransomCase */

// dec string var newWord
// enter loop
// if  index divisible by 2 make to upperCase else make lowerCase
// Assign newWord to arg string
// Return arg string

function ransomCase(string) {
  var newWord = '';
  for (var i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      newWord += string[i].toLowerCase();
    } else {
      newWord += string[i].toUpperCase();
    }
  }
  string = newWord;
  return string;
}
