/* exported isPalindromic */

// Enter loop that iterates backwards and push it to var reverseString
// Compare to to arg string

function isPalindromic(string) {
  string = string.replace(' ', '');
  var reversed = '';
  var isPalindrome = false;
  for (var i = string.length - 1; i >= 0; i--) {
    reversed += string[i];
  }
  if (string === reversed) {
    isPalindrome = true;
  }
  return isPalindrome;
}
