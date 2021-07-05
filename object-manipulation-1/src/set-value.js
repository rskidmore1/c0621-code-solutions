/* exported setValue */


// dec func
// dec var newVal arg value assigned to arg key at arg obj in bracket notation
//return newVal

function setValue(object, key, value){
  var newVal = object[key] = value; 
  return newVal; 
}
