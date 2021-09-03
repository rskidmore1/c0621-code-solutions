require('dotenv/config');
const pg = require('pg');
const express = require('express');
const ClientError = require('./client-error');
const errorMiddleware = require('./error-middleware');
const uploadsMiddleware = require('./uploads-middleware');

const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

const app = express();

const jsonMiddleware = express.json();

app.use(jsonMiddleware); // Mounts json middleware

app.post('/api/uploads', uploadsMiddleware, (req, res, next) => { // My part to write
  const { caption } = req.body;
  if (!caption) {
    throw new ClientError(400, 'caption is a required field');
  }

  const urlUpload = '/images/' + req.file.filename;
  console.log(urlUpload);
  const sql = `
    insert into "images"
      ("caption", "url")
      values ($1, $2)
    returning *;
  `;
  const params = [caption, urlUpload];

  db.query(sql, params)
    .then(result => {
      res.json(result.rows);
    })
    .catch(err => next(err));

  /**
   * - create a url for the image by combining '/images' with req.file.filename
   * - insert the "caption" and "url" into the "images" table
   * - respond with the inserted row data
   * - catch any errors
   */
});

app.get('/api/images', (req, res, next) => { // pulls images from database
  const sql = `
    select *
      from "images"
  `;
  db.query(sql)
    .then(result => {
      res.json(result.rows);
    })
    .catch(err => next(err));
});

app.use(errorMiddleware); // Mounts error middleware

app.listen(process.env.PORT, () => { // starts database
  // eslint-disable-next-line no-console
  console.log(`express server listening on port ${process.env.PORT}`);
});
