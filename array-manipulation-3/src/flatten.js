/* exported flatten */
// COnvert to string
// remove all charcters that are not letter
// split on space

// OR

// Enter loop
// chaeck of array[i] is object
// if true enter loop and push items to

function flatten(array) {
  var finalArray = [];
  for (var i = 0; i < array.length; i++) {
    if (typeof array[i] === 'object') {
      console.log('if worked');
      for (var j = 0; j < array[i].length; j++) {

        finalArray.push(array[i][j]);
      }
    } else {
      finalArray.push(array[i]);
    }
  }
  return finalArray;
}

// function flatten(array) {
//   var str = JSON.stringify(array);
//   var str2 = '';
//   for (var i = 0; i < str.length; i++) {
//     switch (str[i]) {
//       case '[':
//       case ']':
//       case '"':
//       case '}':
//         break;
//       case ',':
//         console.log('switch works');
//         str2 += ' ';
//         break;

//       default:
//         str2 += str[i];
//         console.log('default', str[i]);
//         break;

//     }
//   }
//   var flat = str2.split(' ');
//   var output = ['foo', 'bar', 'baz', 'qux'];
//   return output;
// }
