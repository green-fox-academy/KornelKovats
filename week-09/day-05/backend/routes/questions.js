const express = require('express');
const db = require('../database/database');

const apiQuestions = express.Router();

apiQuestions.get('/questions', (req, res) => {
  const query = 'SELECT question FROM questions;';
  db.query(query, (err, rows) => {
    if (err) throw err;
    res.json(rows);
  });
});

module.exports = apiQuestions;
