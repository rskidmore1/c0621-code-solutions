const express = require('express');
const fs = require('fs');

const app = express();

const notes = {}

app.get('/api/notes', (req, res) =>{
  let notesSend = []
  for (let note in notes){
    notesSend.push(grades[note])
  }
  res.status(200).json(notesSend);
})


app.listen(3000, function(){
  console.log('Listening on port 3000');
})
