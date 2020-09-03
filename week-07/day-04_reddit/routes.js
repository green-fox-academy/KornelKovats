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
    conn.query(`SELECT * FROM posts where id=${rows.insertId}`, (err, rows) => {
      if (err) {
        console.error(`Cannot retrieve data: ${err.toString()}`);
        res.sendStatus(500);
        return null;
      }
      return res.status(200).json(rows);
    });
  });
});

router.put('/posts/:id/upvote', (req, res) => {
  const id = [req.params.id];
  conn.query('UPDATE posts set score=score+1 where id=?;', id, (err, rows) => {
    if (err) {
      console.error(`Cannot retrieve data: ${err.toString()}`);
      res.sendStatus(500);
      return null;
    }
    conn.query('SELECT * FROM posts where id=?', id, (err, rows) => {
      if (err) {
        console.error(`Cannot retrieve data: ${err.toString()}`);
        res.sendStatus(500);
        return null;
      }
      return res.status(200).json(rows);
    });
  });
});
router.put('/posts/:id/downvote', (req, res) => {
  const id = [req.params.id];
  conn.query('UPDATE posts set score=score-1 where id=?;', id, (err, rows) => {
    if (err) {
      console.error(`Cannot retrieve data: ${err.toString()}`);
      res.sendStatus(500);
      return null;
    }
    conn.query('SELECT * FROM posts where id=?', id, (err, rows) => {
      if (err) {
        console.error(`Cannot retrieve data: ${err.toString()}`);
        res.sendStatus(500);
        return null;
      }
      return res.status(200).json(rows);
    });
  });
});

module.exports = router;
