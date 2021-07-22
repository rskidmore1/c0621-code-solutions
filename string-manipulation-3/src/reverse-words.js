/* exported reverseWords */

// Split string into a array
// enter loop over array
// enter decrementing loop over string item
// push chars to reverseStr
// exit string loop
// push reverseStr to newStr

function reverseWords(string) {
  var strArray = string.split(' ');
  var newArray = [];
  var newStr = '';

  for (var i = 0; i < strArray.length; i++) {
    var reverseStr = '';
    for (var j = strArray[i].length - 1; j >= 0; j--) {
      reverseStr += strArray[i][j];

    }
    newStr += reverseStr + ' ';
  }
  newStr = newStr.trim();
  return newStr;
}
