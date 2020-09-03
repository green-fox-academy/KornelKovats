const express = require('express');
const conn = require('./connectionDB');

const router = express.Router();
router.use(express.json());

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

router.post('/posts', (req, res) => {
  const post = [req.body.title, req.body.url];
  conn.query('INSERT INTO posts (title,url) values (?,?);', post, (err, rows) => {
    if (err) {
      console.error(`Cannot retrieve data: ${err.toString()}`);
      res.sendStatus(500);
      return null;
    }
    return res.status(200).json(rows);
  });
  console.log(post);
});

module.exports = router;
