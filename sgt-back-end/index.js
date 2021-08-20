const pg = require('pg');
const express = require('express');

const app = express();

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

app.get('/api/grades', (req, res, next) => {
  const sql = `
  select *
  from "grades"`;

  db.query(sql)
    .then(results => {
      const grade = results.rows[0];
      if (!grade) {
        res.status(200).json({
          noResults: 'There are no grades'
        });
      } else {
        res.status(200).json(grade);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'Error occured'
      });

    });
});

app.use(express.json());

app.post('/api/grades', (req, res, next) => {
  const sql =
  `insert into "grades"
      ("name",
      "course",
      "score")
    values
      ($1,
      $2,
      $3
      )
      returning*;
  `;

  const vals = [req.body.name, req.body.course, req.body.score];
  if (req.body.name === undefined || req.body.course === undefined || req.body.score > 100) {
    res.status(400).json({
      error: 'One or more inputs is mal-formed'
    });
  } else {
    db.query(sql, vals)
      .then(results => {
        const grade = results.rows[0];
        res.status(201).json(grade);

      })
      .catch(err => {
        console.error(err);
        res.status(500).json({
          error: 'Query failed'
        });

      });
  }
});

app.put('/api/grades/:gradeId', (req, res, next) => {
  const gradeId = parseInt(req.params.gradeId, 10);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {

    res.status(400).json({
      error: '"gradeId" must be a positive integer'
    });
    return;
  }
  const sql =
    `update "grades" set
       "name" = $1,
       "course"= $2,
       "score" = $3
    where "gradeId" = $4
    returning *;
  `;

  const vals = [req.body.name, req.body.course, req.body.score, gradeId];
  if (req.body.name === undefined || req.body.course === undefined || req.body.score > 100) {
    res.status(400).json({
      error: 'One or more inputs is mal-formed'
    });
  } else {
    db.query(sql, vals)
      .then(results => {
        const grade = results.rows[0];
        if (!grade) {
          res.status(404).json({
            error: `Cannot find grade with "gradeId" ${gradeId}`
          });
        } else {
          res.status(200).json(grade);
        }
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({
          error: 'Query failed'
        });
      });
  }
});

app.delete('/api/grades/:gradeId', (req, res, next) => {
  const gradeId = parseInt(req.params.gradeId, 10);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {

    res.status(400).json({
      error: '"gradeId" must be a positive integer'
    });
    return;
  }
  const sql =
   `
   delete
      from "grades"
      where "gradeId" = $1
    returning *
    `;
  const vals = [gradeId];

  db.query(sql, vals)
    .then(results => {
      const grade = results.rows[0];
      if (!grade) {
        res.status(404).json({
          error: `Cannot find grade with "gradeId" ${gradeId}`
        });
      } else {
        res.status(204).json(grade);
      }

    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'Query failed'
      });
    });
});

app.listen(3000, function () {
});
