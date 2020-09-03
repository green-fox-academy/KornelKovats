const express = require('express');
const endPoints = require('./routes');


const app = express();
app.use(express.static('public'));
app.use(endPoints);

const PORT = 3000;

app.get('/', (req, res) => {
  res.sendFile('index.html');
});

app.listen(PORT, () => {
  console.log(`Reddit app is listening on port:${PORT}`);
});
