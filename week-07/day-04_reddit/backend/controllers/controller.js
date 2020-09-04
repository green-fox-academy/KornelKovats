const express = require('express');
const conn = require('../connectionDB');
const { route } = require('../router');

const router = express.Router();
router.use(express.json());

router.get('/posts', (req, res) => {
  const postsObj = {
    posts: [],
  };
  conn.query('SELECT * FROM posts;', (err, rows) => {
    if (err) {
      console.error(`Cannot retrieve data: ${err.toString()}`);
      res.sendStatus(500);
      return null;
    }
    postsObj.posts = rows;
    return res.status(200).json(postsObj);
  });
});

router.post('/posts', (req, res) => {
  req.accepts('application/json');
  // eslint-disable-next-line max-len
  if (req.headers.username !== undefined && req.body.title !== undefined && req.body.url !== undefined) {
    // select user from users
    conn.query(`SELECT * FROM users WHERE username='${req.headers.username}';`, (err, rows) => {
      if (err) {
        console.error(`Cannot retrieve data: ${err.toString()}`);
        res.sendStatus(500);
        return null;
      }
      // handle if user exists
      if (rows[0].length !== 0) {
        const insertedUserValue = [req.body.title, req.body.url, rows[0].id];
        conn.query('INSERT INTO posts (title,url,id_user) values (?,?,?);', insertedUserValue, (err, rows) => {
          if (err) {
            console.error(`Cannot retrieve data: ${err.toString()}`);
            res.sendStatus(500);
            return null;
          }
          conn.query(`SELECT * FROM posts where id='${rows.insertId}';`, (err, rows) => {
            if (err) {
              console.error(`Cannot retrieve data: ${err.toString()}`);
              res.sendStatus(500);
              return null;
            }
            return res.status(200).json(rows);
          });
        });
      } else {
        res.status(404).send('Username doesn\'t exist');
      }
    });
  } else {
    // TODO: fix HTTP status code
    res.status(404).send('Can not make post without username or title or url');
  }
});

router.put('/posts/:id/upvote', (req, res) => {
  req.accepts('application/json');
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
  req.accepts('application/json');
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

router.delete('/posts/:id', (req, res) => {
  req.accepts('application/json');
  const id = [req.params.id];
  conn.query('SELECT * FROM posts where id=?', id, (err, rows) => {
    if (err) {
      console.error(`Cannot retrieve data: ${err.toString()}`);
      res.sendStatus(500);
      return null;
    }
    const postToDelete = rows;
    conn.query('DELETE FROM posts where id=?', id, (err, rows) => {
      if (err) {
        console.error(`Cannot retrieve data: ${err.toString()}`);
        res.sendStatus(500);
        return null;
      }
      return res.status(200).send(postToDelete);
    });
  });
});
router.put('/posts/:id', (req, res) => {
  req.accepts('application/json');
  const whatNeedstoModified = [req.body.title, req.body.url, req.params.id];
  const id = [req.params.id];
  conn.query('UPDATE posts SET title=?, url=? where id=?;', whatNeedstoModified, (err, rows) => {
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
