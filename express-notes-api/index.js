const express = require('express');
const fs = require('fs');
const notes = require('./data');

const app = express();

app.get('/api/notes', (req, res) => {
  const notesSend = [];

  for (const note in notes) {
    notesSend.push(notes[note]);
  }
  res.status(200).json(notesSend);
});

app.get('/api/notes/:id', (req, res, next) => {
  const id = Number(req.params.id);

  if (Number.isInteger(id) && id > 0) {

    if (req.params.id in notes.notes) {
      res.status(200).json(notes.notes[req.params.id]);
    } else {
      res.status(404).json({ error: 'id is not in notes' });
    }
  } else {
    res.status(400).json({ error: 'id must be positive integer' });
  }
});

app.use(express.json());

app.post('/api/notes', (req, res) => {
  if (req.body.content !== undefined) {

    notes.notes[notes.nextId] = { id: notes.nextId, content: req.body.content };
    const idRecall = notes.nextId;
    notes.nextId++;

    fs.writeFile('data.json', JSON.stringify(notes, null, 2), err => {
      if (err) {
        res.status(500).json({ error: 'An unexpected error occurred.' });
      } else {
        res.status(201).json(notes.notes[idRecall]);
      }
    });
  } else {
    res.status(400).json({ error: 'No content prop' });
  }
});

app.delete('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);

  if (Number.isInteger(id) && id > 0) {
    if (req.params.id in notes.notes) {
      delete notes.notes[req.params.id];

      fs.writeFile('data.json', JSON.stringify(notes, null, 2), err => {
        if (err) {
          res.status(500).json({ error: 'An unexpected error occurred.' });
        } else {
          res.status(204).json();
        }
      });
    } else {
      res.status(404).json({ error: 'id is not in notes' });
    }

  } else {
    res.status(400).json({ error: 'Not a valid ID' });
  }

});

app.put('/api/notes/:id', (req, res) => {

  const id = Number(req.params.id);

  if ((Number.isInteger(id) === false && id < 0) || req.body.content === undefined) {
    res.status(404).json({ error: 'Invalid input' });
  } else if ((Number.isInteger(id) && id > 0) && req.body.content !== undefined) {

    if (req.params.id in notes.notes) {

      notes.notes[req.params.id] = { id: id, content: req.body.content };

      fs.writeFile('data.json', JSON.stringify(notes, null, 2), err => {
        if (err) {
          res.status(500).json({ error: 'An unexpected error occurred.' });
        } else {
          res.status(204).json();
        }
      });

    } else {
      res.status(404).json({ error: 'Id does not exist' });
    }

  }
});

app.listen(3000, function () {

});
