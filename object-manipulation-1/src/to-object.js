/* exported toObject */

// dec obj var newObj
// assign arg value to arg key at newObj
// return newObj


function toObject(keyValuePair){
  var newObj = {}; 
  newObj[keyValuePair[0]] = keyValuePair[1]
  return newObj; 
}
