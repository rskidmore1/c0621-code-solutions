/* exported filterOutNulls */
function filterOutNulls(values) {
  var tempValues = values;
  values = [];
  for (var i = 0; i < tempValues.length; i++) {

    if (tempValues[i] !== null) {
      var tempVal = tempValues[i];
      values.push(tempVal);
    }
  }
  return values;
}
