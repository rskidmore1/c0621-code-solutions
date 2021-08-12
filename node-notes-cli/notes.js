const fs = require('fs');
const jsonFile = require('./data');
const add = require('./add');
const del  = require('./delete');
const read =  require('./read');
const update = require('./update')

if (process.argv[2] === 'read'){
  console.log(read());
} else if (process.argv[2] === 'add') {
  write(add(process.argv[3]))
} else if (process.argv[2] === 'delete'){
  write(del(process.argv[3]))
} else if (process.argv[2] === 'update') {
  write(update(process.argv[3], process.argv[4]))
} else {
  console.log("Not a command, sir! Enter a command");
}

function write(input) {
  jsonFileStr = JSON.stringify(input, null, 2);

  fs.writeFile('data.json', jsonFileStr, (err) => {
    if (err) throw err;
  })

}
