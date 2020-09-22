const express = require('express');

const PORT = 8080;

const app = express();

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile('index.html');
});

app.listen(PORT, () => {
  console.log(`Frontend server running on port: ${PORT}`);
});
