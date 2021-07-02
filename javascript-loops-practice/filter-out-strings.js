/* exported filterOutStrings */
function filterOutStrings(values) {
  var output = [];
  for (var i = 0; i < values.length; i++) {

    if (typeof values[i] !== 'string') {
      var tempVal = values[i];
      output.push(tempVal);
    }
  }
  return output;
}
