const jsonFile = require('./data');

function update(key, input) {
  jsonFile.notes[key] = input;

  return jsonFile;
}

module.exports = update;
