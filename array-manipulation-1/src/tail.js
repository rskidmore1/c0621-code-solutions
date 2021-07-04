/* exported tail */

// dec func
// delete the first index in the array 
// return the array arg

function tail(array){
  delete array[0]; 
  var arrayTail = [];
  for (var i = 0; i < array.length; i++){
    if( i === 0 ){
      null; 
    } else {
    arrayTail.push(array[i]); 
    }
  }
  return arrayTail; 
}
