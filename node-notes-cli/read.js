const jsonFile = require('./data');

function read() {
  let data = jsonFile.notes;
  let output = '';

  for (var i = 0; i < Object.keys(data).length; i++) {
    output += `${Object.keys(data)[i]}: ${Object.values(data)[i]} \n`
  }
  return output;
}

module.exports = read;
