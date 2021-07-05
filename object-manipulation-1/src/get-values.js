/* exported getValues */

// just like getKeys but 
// access values by calling key on object


function getValues(object){
  var values = []; 
  for (key in object){
    // keys.push(key); 
    values.push(object[key]); 
  }
  return values; 
 }
