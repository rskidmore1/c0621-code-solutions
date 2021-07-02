/* exported filterOutNulls */
function filterOutNulls(values) {
  var output = [];
  for (var i = 0; i < values.length; i++) {
    var tempVal = values[i];
    if (values[i] !== null) {

      output.push(tempVal);
    }
  }
  return output;
}
