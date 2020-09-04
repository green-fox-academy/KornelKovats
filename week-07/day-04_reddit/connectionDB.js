const mysql = require('mysql');

// TODO: please use dotenv
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'reddit-kornel',
});

module.exports = conn;


