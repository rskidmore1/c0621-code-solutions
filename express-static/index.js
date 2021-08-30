const express = require('express');
const path = require('path');

const app = express();

const pathName = path.join(__dirname, 'public');

console.log(pathName);

app.use(express.static(pathName));

app.listen(3000, function () {
  console.log('Listening on port 3000');
});
