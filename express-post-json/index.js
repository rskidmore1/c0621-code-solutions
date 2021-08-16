const express = require('express')
let app = express();
let nextId = 1;
let grades = {};


app.get('/api/grades', function (req, res){
  var gradeSend = []
  for (var grade in grades) {
    gradeSend.push(grades[grade]);
  }
  res.json(gradeSend);
});


app.use(express.json());


app.post('/api/grades', function (req, res) {
  req.body.id = nextId;
  grades[nextId] = req.body;
  res.status(201).send(req.body);
  nextId++;
});


app.listen(3000, function () {
  console.log('Listening on port 3000');
});
