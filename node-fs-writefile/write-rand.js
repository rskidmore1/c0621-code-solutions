const fs = require('fs');
const rand = Math.random()
const data = rand.toString();

fs.writeFile('random.txt', data, (err) => {
  if (err) throw err;
});
