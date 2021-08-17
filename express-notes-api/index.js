const express = require('express');
const fs = require('fs');
const notes = require('./data')

const app = express();

function write(input){
  fs.writeFile('data.json', input, (err) => {
    if (err) throw err;
    console.log('File write successful');
  });
}


app.get('/api/notes', (req, res) =>{
  let notesSend = []

  for (let note in notes){
    notesSend.push(notes[note])
  }
  res.status(200).json(notesSend);
})


app.get('/api/notes/:id', (req, res, next) => {

  if (Number.isInteger(Number(req.params.id))  && Number(req.params.id) > 0){


    if (String(req.params.id) in notes.notes){
      res.status(200).json(notes.notes[req.params.id]);
    } else {
      res.status(404).json({ 'error': 'id is not in notes' });
    }
  }else{
      res.status(400).json({'error': 'id must be positive integer'});
  }
})

app.use(express.json());


app.post('/api/notes', (req, res) => {
  console.log('hello')
  if(req.body.content !== undefined){

      notes.notes[notes.nextId] = { 'id': notes.nextId, 'content': req.body.content }
       const idRecall = notes.nextId
      notes.nextId++;

      fs.writeFile('data.json', JSON.stringify(notes, null, 2), (err) => {
        if (err) {
          res.status(500).json({ "error": "An unexpected error occurred." })
        } else {
          res.status(201).json(notes.notes[idRecall])
        }
      });
  } else {
    res.status(400).json({'error': 'No content prop'});
  }
})

app.delete('/api/notes/:id', (req, res) =>{

  if (Number.isInteger(Number(req.params.id)) && Number(req.params.id) > 0) {
    if (String(req.params.id) in notes.notes) {
      delete notes.notes[req.params.id]



      fs.writeFile('data.json', JSON.stringify(notes, null, 2), (err) => {
        if (err) {
          res.status(500).json({ "error": "An unexpected error occurred." })
        } else {
          res.status(204).json()
        }
      });
    }
    else {
      res.status(404).json({ 'error': 'id is not in notes' });
    }


  } else {
    res.status(400).json({ "error": "Not a valid ID" })
  }


})


app.put('/api/notes/:id', (req,res) =>{

  if ((Number.isInteger(Number(req.params.id)) === false && Number(req.params.id) < 0) || req.body.content === undefined){
    res.status(404).json({'error': 'Invalid input'});
  } else if ((Number.isInteger(Number(req.params.id))  && Number(req.params.id) > 0) && req.body.content !== undefined){

    if (String(req.params.id) in notes.notes) {

      notes.notes[req.params.id] = { 'id': Number(req.params.id), 'content': req.body.content }
      const idRecall = notes.nextId

      fs.writeFile('data.json', JSON.stringify(notes, null, 2), (err) => {
        if (err) {
          res.status(500).json({ "error": "An unexpected error occurred." })
        } else {
          res.status(204).json()
        }
      });

    } else {
      res.status(404).json({ 'error': 'Id does not exist' });
    }

  }
})


app.listen(3000, function(){
  console.log('Listening on port 3000');
})
