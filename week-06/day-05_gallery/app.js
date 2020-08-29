const express = require('express');
const { unwatchFile } = require('fs');

const app = express();

app.set('view engine', 'ejs');
app.use('/static', express.static('static'));
const listOfPictures = ['1.jpeg', '2.jpeg', '3.jpeg', '4.jpeg', '5.jpeg'];

app.get('/', (req, res) => {
  const data = {
    pictures: listOfPictures,
  };
  let previousIndex = 0;
  let nextIndex = 0;
  let { imageIndex } = req.query;
  if (imageIndex === undefined) {
    imageIndex = 0;
  } else {
    imageIndex = Number(imageIndex);
  }
  if (imageIndex === 0) {
    previousIndex = listOfPictures.length - 1;
  } else {
    previousIndex = imageIndex - 1;
  }
  if (imageIndex === listOfPictures.length - 1) {
    nextIndex = 0;
  } else {
    nextIndex = imageIndex + 1;
  }
  data.currentImageUrl = `/static/${listOfPictures[imageIndex]}`;
  data.previousIndex = previousIndex.toString();
  data.nextIndex = nextIndex.toString();

  res.render('home.ejs', data);
});

app.listen(3000, () => {
  console.log('app is listening on Port: 3000');
});
