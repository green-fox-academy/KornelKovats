const express = require('express');

const app = express();

app.set('view engine', 'ejs');

const array = ['get up', 'survive', 'go back to bed'];

const obj = {
  todo: array,
};
app.get('/', (req, res) => {
  res.render('home.ejs', obj);
});

app.listen(3000);
