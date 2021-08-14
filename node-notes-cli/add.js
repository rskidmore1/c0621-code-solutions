const jsonFile = require('./data');

function add(input) {

  jsonFile.notes[jsonFile.nextId] = input;
  jsonFile.nextId++;

  return jsonFile;
}

module.exports = add;
