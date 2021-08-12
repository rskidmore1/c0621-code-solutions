const jsonFile = require('./data');

function update(key, input) {

  for (var i = 0; i < Object.keys(jsonFile.notes).length; i++) {
    if (Object.keys(jsonFile.notes)[i] === key) {
      jsonFile.notes[Object.keys(jsonFile.notes)[i]] = input;
    }
  }
  return jsonFile;
}

module.exports = update;
