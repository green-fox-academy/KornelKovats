const express = require('express');
const router = require('./router');

const app = express();
router(app);
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Reddit app is listening on port:${PORT}`);
});
