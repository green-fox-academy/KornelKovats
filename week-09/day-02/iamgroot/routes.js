const express = require('express');
const { parse } = require('path');

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
app.get('/yondu', (req, res) => {
  const disTance = parseInt(req.query.distance, 10);
  const tiMe = parseInt(req.query.time, 10);
  const spEEd = disTance/tiMe;
  if (req.query.distance !== undefined && req.query.time !== undefined) {
    res.json({
      distance: disTance,
      time: tiMe,
      speed: spEEd,
    });
  } else {
    res.send({ error: 'can not calculate the speed' });
  }
});

module.exports = app;
