const jsonFile = require('./data');

function del(input) {

  let newNotes = {}
  for (var i = 0; i < Object.keys(jsonFile.notes).length; i++) {
    if (Object.keys(jsonFile.notes)[i] !== input) {
      newNotes[Object.keys(jsonFile.notes)[i]] = Object.values(jsonFile.notes)[i]
    }
  }
  jsonFile.notes = newNotes;
  return jsonFile;
}

module.exports = del
