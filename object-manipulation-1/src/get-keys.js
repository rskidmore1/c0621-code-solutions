/* exported getKeys */

// dec arr var keys
// Loop over arg arr 
// Use iterator to access keys at their index
// Push keys to var keys

function getKeys(object){
  var keys = []; 
  for (key in object){
    keys.push(key); 
  }
  return keys; 
}
