const express = require('express');
const endPoints = require('./endpoints');

const app = express();

// parse various different custom JSON types as JSON
app.use(express.urlencoded());
app.use(express.json());
app.use(endPoints);
app.use(express.static('public'));

app.listen(3000, () => {
  console.log('App is listening on port:3000');
});
