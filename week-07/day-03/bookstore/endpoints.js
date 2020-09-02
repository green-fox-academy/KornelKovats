const express = require('express');
const conn = require('./connectionDB');

const router = express.Router();

router.get('/names', (req, res) => {
  conn.query('SELECT book_name FROM book_mast;', (err, rows) => {
    if (err) {
      console.error(`Cannot retrieve data: ${err.toString()}`);
      res.sendStatus(500);
      return null;
    }
    return res.send(rows);
  });
});

router.get('/api/allbook', (req, res) => {
  if (req.query.category !== undefined) {
    const query = `SELECT book_name,aut_name,cate_descrip,pub_name,book_price FROM book_mast 
    join author on book_mast.aut_id=author.aut_id 
    join category on category.cate_id=book_mast.cate_id 
    join publisher on publisher.pub_id=book_mast.pub_id 
    where category.cate_descrip='${req.query.category}';`;
    conn.query(query, (err, rows) => {
      if (err) {
        console.error(`Cannot retrieve data: ${err.toString()}`);
        res.sendStatus(500);
        return null;
      }
      return res.json(rows);
    });
  } else if (req.query.publisher !== undefined) {
    const query = `SELECT book_name,aut_name,cate_descrip,pub_name,book_price FROM book_mast
    join author on book_mast.aut_id=author.aut_id 
    join category on category.cate_id=book_mast.cate_id
    join publisher on publisher.pub_id=book_mast.pub_id 
    where publisher.cate_descrip='${req.query.pub_name}';`;
    conn.query(query, (err, rows) => {
      if (err) {
        console.error(`Cannot retrieve data: ${err.toString()}`);
        res.sendStatus(500);
        return null;
      }
      return res.json(rows);
    });
  } else if (req.query.price !== undefined) {
    const query = `SELECT book_name,aut_name,cate_descrip,pub_name,book_price FROM book_mast 
    join author on book_mast.aut_id=author.aut_id 
    join category on category.cate_id=book_mast.cate_id
    join publisher on publisher.pub_id=book_mast.pub_id
    where book_mast.book_price='${req.query.price}';`;
    conn.query(query, (err, rows) => {
      if (err) {
        console.error(`Cannot retrieve data: ${err.toString()}`);
        res.sendStatus(500);
        return null;
      }
      return res.json(rows);
    });
  } else {
    console.log(req.query);
    const query = 'SELECT book_name,aut_name,cate_descrip,pub_name,book_price FROM book_mast join author on book_mast.aut_id=author.aut_id join category on category.cate_id=book_mast.cate_id join publisher on publisher.pub_id=book_mast.pub_id;';
    conn.query(query, (err, rows) => {
      if (err) {
        console.error(`Cannot retrieve data: ${err.toString()}`);
        res.sendStatus(500);
        return null;
      }
      return res.json(rows);
    });
  }
});
router.get('/allbook', (req, res) => {
  res.sendFile(`${__dirname}/public/allbook/index.html`);
});

module.exports = router;
