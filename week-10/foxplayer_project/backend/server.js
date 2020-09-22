const express = require('express');

const PORT = 3000;

const app = express();

app.get('/', (req, res) => {

});

app.listen(PORT, () => {
  console.log(`Backend server running on port: ${PORT}`);
});
