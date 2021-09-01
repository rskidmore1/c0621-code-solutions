require('dotenv/config'); // Does this module pull from our .env file?
const jwt = require('jsonwebtoken');

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJuYW1lIjoiYXV0b2RpZGFjdCIsImlhdCI6MTYwODE1NjM4Nn0.w9mORRpJ6Twlwr1pMdILyNqOyz7Auh8_rzcRUsexvy8';

try {
  const payload = jwt.verify(token, process.env.TOKEN_SECRET); // Don't totally know
  console.log(payload); // Why is payload { userId: 1, username: 'autodidact', iat: 1608156386 }? It look like its coming from the data but I don't see any kind of query
} catch (err) {
  console.error(err);
}
