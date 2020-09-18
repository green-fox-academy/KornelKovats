const express = require('express');

const PORT = 3000;
const app = express();

app.use(express.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendfile('index.html');
});

app.listen(PORT, () => {
  console.log(`App is listening on port:${PORT}`);
});
