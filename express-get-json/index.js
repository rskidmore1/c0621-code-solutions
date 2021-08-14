const express = require('express');

let app = express();

let grades = {
  12: {
    id: 12,
    name: 'Tim Berners-Lee',
    course: 'HTML',
    score: 95
  },
  47: {
    id: 47,
    name: 'Brendan Eich',
    course: 'JavaScript',
    score: 100
  },
  273: {
    id: 273,
    name: 'Forbes Lindsay',
    course: 'JavaScript',
    score: 92
  }
}

app.get('/api/grades', function(req,res){
  var gradeSend = []
  for(var grade in grades){
    gradeSend.push(grades[grade]);
  }
  res.json(gradeSend);
 });


app.listen(3000, function () {
  console.log('Listening on port 3000');
})
