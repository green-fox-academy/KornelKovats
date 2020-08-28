const express = require('express');

const app = express();

app.set('view engine', 'ejs');
app.use('/static', express.static('static'));
const listOfPictures = ['1.jpeg', '2.jpeg', '3.jpeg', '4.jpeg', '5.jpeg'];

const pictureObj = {
  picture: listOfPictures,
};
app.get('/', (req, res) => {
  res.render('home.ejs');
});

app.listen(3000, () => {
  console.log('app is listening on Port: 3000');
});
