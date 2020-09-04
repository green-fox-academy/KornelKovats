const express = require('express');
const endPoints = require('./routes');

const app = express();
app.use(endPoints);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Reddit app is listening on port:${PORT}`);
});
