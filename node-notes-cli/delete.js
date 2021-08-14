const jsonFile = require('./data');

function del(input) {
  delete jsonFile.notes[input];

  return jsonFile;
}

module.exports = del
