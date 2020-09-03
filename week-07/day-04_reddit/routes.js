const express = require('express');
const conn = require('./connectionDB');

const router = express.Router();

router.get('/posts', (req, res) => {
  conn.query('SELECT * FROM posts;', (err, rows) => {
    if (err) {
      console.error(`Cannot retrieve data: ${err.toString()}`);
      res.sendStatus(500);
      return null;
    }
    return res.status(200).json(rows);
  });
});

module.exports = router;
