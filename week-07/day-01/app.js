const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.static('assets'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/doubling', (req, res) => {
  const receivedQueryString = parseInt(req.query.input, 10);
  const data = {
    received: receivedQueryString,
    result: receivedQueryString * 2,
  };
  if (req.query.input === undefined) {
    res.send({ error: 'Please provide an input!' });
  }
  res.send(data);
});

app.listen(PORT, () => {
  console.log(`The server is up and running on ${PORT}`);
});
