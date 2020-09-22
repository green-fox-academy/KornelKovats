require('dotenv').config();
const mysql = require('mysql');

const DB = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
});

DB.connect((err) => {
  if (err) {
    console.error('Unable to connect to DB', err.sqlMessage);
    return;
  } console.log('Successfully connected to DB');
});

const query = (sql, args) => new Promise((resolve, reject) => {
  DB.query(sql, args, (err, data) => {
    if (err) { reject(err); console.error(err.sqlMessage); }
    resolve(data);
  });
});

module.exports = query;