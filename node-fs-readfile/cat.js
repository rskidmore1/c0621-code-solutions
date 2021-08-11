const fs = require('fs');


//take input and parse array
//Runs loop through process and cat to end of string
const input = process.argv
for (var i = 2; i < input.length; i++){
  fs.readFile(input[i], 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
  });

}
