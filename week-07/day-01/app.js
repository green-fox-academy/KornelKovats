const express = require('express');
const path = require('path');

const bodyParser = require('body-parser');
const { isLabeledStatement } = require('typescript');

const app = express();
const PORT = 3000;

app.use(express.static('assets'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

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

app.get('/greeter', (req, res) => {
  const { name, title } = req.query;

  if (name === undefined && title === undefined) {
    res.status(400).send({ error: 'Please provide a name and a title!' });
  } else if (name === undefined && title !== undefined) {
    res.status(400).send({ error: 'Please provide a name!' });
  } else if (name !== undefined && title === undefined) {
    res.status(400).send({ error: 'Please provide a title!' });
  }
  res.send({ welcome_message: `Oh, hi there ${name}, my dear ${title}!` });
});

app.get('/appenda/:appended', (req, res) => {
  res.send({ appended: `${req.params.appended}a` });
});

app.post('/dountil/:action', (req, res) => {
  const { action } = req.params;
  const number = parseInt(req.body.until, 10);
  let responseNumber = 0;
  if (action === 'sum') {
    for (let i = 1; i <= number; i++) {
      responseNumber += i;
    }
    res.send({ result: responseNumber });
  } else if (action === 'factor') {
    responseNumber = 1;
    for (let i = 1; i <= number; i++) {
      responseNumber *= i;
    }
    res.send({ result: responseNumber });
  } else if (number === undefined) {
    res.send({ error: 'Please provide a number!' });
  }
  res.send(number);
});

app.listen(PORT, () => {
  console.log(`The server is up and running on ${PORT}`);
});
