/* exported filterOutStrings */
function filterOutStrings(values) {
  var tempValues = values;
  values = [];
  for (var i = 0; i < tempValues.length; i++) {

    if (typeof tempValues[i] !== 'string') {
      var tempVal = tempValues[i];
      values.push(tempVal);
    }
  }
  return values;
}
