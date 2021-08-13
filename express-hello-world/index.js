const express = require('express');

let app = express()

app.use(function (req, res) {
  res.send('Here is a string');

});


app.listen(3000, function(){
  console.log('Listening on port 3000');
})
