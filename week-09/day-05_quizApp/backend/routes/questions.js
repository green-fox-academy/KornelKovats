const express = require('express');
const db = require('../database/database');

const apiQuestions = express.Router();

apiQuestions.get('/questions', (req, res) => {
  const query = 'SELECT question FROM questions;';
  db.query(query, (err, rows) => {
    if (err) {
      console.log(err.sqlMessage);
      res.sendStatus(500);
      return;
    }
    res.json(rows);
  });
});

module.exports = apiQuestions;
