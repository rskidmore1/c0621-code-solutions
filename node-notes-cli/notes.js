//-create read d
//-create add d
//-create del d
//-crete update
//-create make sure eveyrthing has a return request
  //-pass things to file write d
//-clean things up
//-put them into their own files

const fs = require('fs');
const jsonFile = require('./data');

if (process.argv[2] === 'read'){
  console.log(read());
} else if (process.argv[2] === 'add') {
  write(add(process.argv[3]))
} else if (process.argv[2] === 'delete'){
  write(del(process.argv[3]))
} else if (process.argv[2] === 'update') {
  write(update(process.argv[3], process.argv[4]))
}



function read(){
  let data = jsonFile.notes;
  let output = '';

  for (var i = 0; i < Object.keys(data).length; i++) {
    // console.log(`${Object.keys(jsonFile.notes)[i]}: ${Object.values(jsonFile.notes)[i]}`)
    output += `${Object.keys(data)[i]}: ${Object.values(data)[i]} \n`
  }
  return output;
}


function write(input) {
  jsonFileStr = JSON.stringify(input, null, 2);
  fs.writeFile('data.json', jsonFileStr, (err) => {
    if (err) throw err;
  })

}

//read data file
//append input to data
//write that data to file
function add(input){
  // let data = jsonFile.notes;

  jsonFile.notes[jsonFile.nextId] = input;
  jsonFile.nextId++;
  return jsonFile;
  // write(jsonFile);



//   fs.writeFile('data.json', jsonFileStr, (err)=> {
//     if (err) throw err;



//   })
// }
}

//read id to remove
//get index of that Id
// splice at that index NO
//remove with loop
//try remove with destructuring

//rewrite data. Maybe use add or make a write file function
function del(input){
  // let index = Object.keys(jsonFile.notes).indexOf(input)
  // console.log(index)

  // console.log(Object.keys(jsonFile.notes).splice(index, 1))
  let newNotes = {}
  for (var i = 0; i < Object.keys(jsonFile.notes).length; i++){
    if (Object.keys(jsonFile.notes)[i] !== input ){
      // console.log('this is not the key')
      newNotes[Object.keys(jsonFile.notes)[i]] = Object.values(jsonFile.notes)[i]
    }
  }
  // console.log(newNotes);
  jsonFile.notes = newNotes;
  return jsonFile;
  // write(jsonFile)
  // jsonFileStr = JSON.stringify(jsonFile, null, 2);

  // fs.writeFile('data.json', jsonFileStr, (err) => {
  //   if (err) throw err;



  // })

}


function update(key, input) {
  // let index = Object.keys(jsonFile.notes).indexOf(input)
  // console.log(index)

  // console.log(Object.keys(jsonFile.notes).splice(index, 1))
  // let newNotes = {}
  for (var i = 0; i < Object.keys(jsonFile.notes).length; i++) {
    if (Object.keys(jsonFile.notes)[i] === key) {
      // console.log('this is not the key')
      jsonFile.notes[Object.keys(jsonFile.notes)[i]] = input;
    }
  }
  return jsonFile;
  // write(jsonFile)
  // console.log(newNotes);
  // jsonFile.notes = newNotes
  // jsonFileStr = JSON.stringify(jsonFile, null, 2);

  // fs.writeFile('data.json', jsonFileStr, (err) => {
  //   if (err) throw err;



  // })

}
