const express = require('express');

const app = express();

app.get('/groot', (req, res) => {
  if (req.query.message === null || req.query.message === undefined) {
    res.json({
      error: 'I am Groot!',
    });
  } else {
    res.json({
      received: req.query.message,
      translated: 'I am Groot!',
    });
  }
});

module.exports = app;
