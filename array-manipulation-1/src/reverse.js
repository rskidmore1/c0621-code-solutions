/* exported reverse */


// dec func 
// dec new var array
// loop over arg array decrementing  
// Push arg array to new var array 

function reverse(array)
{
  var newArray = []; 
  for (var i = array.length - 1; i >= 0; i--){
    newArray.push(array[i]); 
  }
  return newArray; 
}
