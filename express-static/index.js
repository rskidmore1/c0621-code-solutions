const express = require('express');
const path = require('path');

const app = express();

const pathName = path.join(__dirname, 'public');

console.log(pathName);

const mountUse = app.use(express.static(pathName));

app.get('/', function (req, res) {
  res.send(mountUse);
});

app.listen(3000, function () {
  console.log('Listening on port 3000');
});
