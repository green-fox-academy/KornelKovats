const express = require('express');
const path = require('path');

const bodyParser = require('body-parser');
const { isLabeledStatement, walkUpBindingElementsAndPatterns, isConstructorDeclaration } = require('typescript');
const { text } = require('body-parser');

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

app.post('/arrays', (req, res) => {
  const { body } = req;
  if (body.numbers === undefined || body.numbers.length === 0 || body.what === undefined) {
    res.send({ error: 'Please provide what to do with the numbers!' });
  } else if (body.what === 'sum') {
    let sum = 0;
    body.numbers.forEach((element) => {
      sum += element;
    });
    res.send({ result: sum });
  } else if (body.what === 'multiply') {
    let multiply = 1;
    body.numbers.forEach((element) => {
      multiply *= element;
    });
    res.send({ result: multiply });
  } else if (body.what === 'double') {
    const double = req.body.numbers;
    const doubled = double.map((value) => value *= 2);
    res.send({ result: doubled });
  }
});

app.post('/sith', (req, res) => {
  const { body } = req;
  let returnString = '';
  const randomTexts = ['ERGGH...', 'I am sith', 'wraghhh', 'my power is unlimited'];
  if (body.text !== undefined || body.text !== null) {
    let stringText = body.text.split('.');
    stringText = stringText.filter((value) => {
      if (value !== '') {
        return value;
      }
    });
    stringText = stringText.map((sentence) => {
      const wordsInSentence = sentence.split(' ');
      if (wordsInSentence.length % 2 === 0) {
        let evenSentence = '';
        for (let i = 0; i < wordsInSentence.length - 1; i += 2) {
          evenSentence += `${wordsInSentence[i + 1]} ${wordsInSentence[i]}`;
        }
        return evenSentence;
      }
      let nonEvenSentence = '';
      for (let i = 0; i < wordsInSentence.length; i += 2) {
        if (i === wordsInSentence.length) {
          nonEvenSentence += wordsInSentence[i];
        }
        nonEvenSentence += `${wordsInSentence[i + 1]} ${wordsInSentence[i]} `;
      }
      return nonEvenSentence;
    });
    stringText.forEach((sentence) => {
      returnString += `${sentence}.${randomTexts[Math.floor(randomTexts.length * Math.random())]}.`;
    });
    console.log(returnString);
    res.send({ sith_text: returnString });
  }
  res.send({ error: 'Feed me some text you have to, padawan young you are. Hmmm.' });
});

app.post('/translate', (req, res) => {
  const { body } = req;
  const getText = body.text.split('');
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let returningText = '';
  if (body.text !== undefined) {
    console.log(getText);
    getText.forEach((char) => {
      let helperText = char;
      vowels.forEach((vowel) => {
        if (char.toLowerCase() === vowel) {
          helperText += `v${helperText}`;
        }
      });
      returningText += helperText;
    });
  }
  res.send({ translated: returningText });
});

app.listen(PORT, () => {
  console.log(`The server is up and running on ${PORT}`);
});
