const fs = require('fs');
const rand = Math.random()
const data = process.argv[2];

fs.writeFile('note.txt', data, (err) => {
  if (err) throw err;
});
