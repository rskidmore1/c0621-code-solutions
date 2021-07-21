/* exported isAnagram */

// Sorts both arument and pushes each to a new string
// Compares in if else

function isAnagram(firstString, secondString) {
  var anagram = false;
  var firstSorted = '';
  var secondSorted = '';

  for (var i = 0; i < firstString.length; i++) {
    firstSorted += firstString[i].replace(' ', '');
  }
  for (var j = 0; j < secondString.length; j++) {
    secondSorted += secondString[j].replace(' ', '');
  }

  firstSorted = firstSorted.split('');
  secondSorted = secondSorted.split('');
  firstSorted = firstSorted.sort();
  secondSorted = secondSorted.sort();

  if (JSON.stringify(firstSorted) === JSON.stringify(secondSorted)) {
    anagram = true;
  }

  return anagram;

}
