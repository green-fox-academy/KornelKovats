const express = require('express');
const router = require('./routes/index.js');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;
app.use(router);

app.get('/', (req, res) => {
  res.send('HELLO');
});

app.listen(PORT);
