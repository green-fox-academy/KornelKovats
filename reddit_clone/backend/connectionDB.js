const mysql = require('mysql');
require('dotenv').config();

// TODO: please use dotenv
const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

module.exports = conn;