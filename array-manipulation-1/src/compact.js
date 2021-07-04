/* exported compact */


// dec func 
// dec var array contains[] containing elements to omit: false, null, NaN, 0, -0, '',  
// dec var array newArray[] to hold non-omited elements
// Enters loop for arg array
// Enters loop for var array, compareing array[i] to each item in contains[]
//   Pushes non-omited elements new newArray[]
// returns newArray[]

//This ^ was all wrong HAHA


function compact(array) {
  var contains = [false, null, NaN, 0, -0, '']; 
  var newArray = []; 
  for (var i = 0; i < array.length; i++) {
    if (array[i]){
      newArray.push(array[i]); 
    }
  }
  return newArray; 
}
