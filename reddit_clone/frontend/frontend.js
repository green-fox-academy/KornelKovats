const express = require('express');

const app = express();
const PORT = 8080;

app.use(express.static('public'));

app.get('/', (req, res) => {
  /*if (req.localStorage.username !== undefined) {
    res.sendFile(`${__dirname}/public/static/index.html`);
  } else {
    res.redirect('/login');
  }*/
  res.sendFile(`${__dirname}/public/static/index.html`);
});

app.get('/login', (req, res) => {
  res.sendFile(`${__dirname}/public/static/login.html`);
});

app.listen(PORT, () => {
  console.log(`app is listening on port:${PORT}`);
});
