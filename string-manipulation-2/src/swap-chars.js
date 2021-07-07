/* exported swapChars */

// Assign firstIndex letter to var firstChar
// Assign secondIndex letter to var secondchar
// Enter loop
// Enter if else for if iterator is equal to the index of the firstIndex add secondChar to var newString and visa versa for index of secondIndex
// else push letters to newString in order

function swapChars(firstIndex, secondIndex, string) {
  var firstChar = string[firstIndex];
  var secondChar = string[secondIndex];
  var newString = '';
  for (var i = 0; i < string.length; i++) {
    if (i === firstIndex) {
      newString += secondChar;
    } else if (i === secondIndex) {

      newString += firstChar;
    } else {
      newString += string[i];

    }
  }
  string = newString;
  return string;

}
