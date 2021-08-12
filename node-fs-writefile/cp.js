const fs = require('fs');

const file1 = process.argv[2];
const file2 = process.argv[3];
let fileData = ''

fs.readFile(file1,  'utf8', (err, data) => {
  if (err) throw err;
  console.log(data)
  fs.writeFile(file2, data, (err) => {
    if (err) throw err;
    console.log('Data was written');
  });

});
