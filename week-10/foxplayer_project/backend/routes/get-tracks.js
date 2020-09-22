const express = require('express');
const query = require('../database/database');

const getTracks = express.Router();

getTracks.get('/playlist-tracks', (req, res) => {
  const sqlQuery = 'SELECT * FROM tracks;';
  query(sqlQuery)
    .then((tracks) => res.json(tracks))
    .catch((error) => console.log(error));
});

getTracks.get('/playlist-tracks/:playlist_id', (req, res) => {
  const sqlQuery = 'SELECT * FROM tracks WHERE playlist_id = ?;';
  query(sqlQuery, [req.params.playlist_id])
    .then((tracks) => res.json(tracks))
    .catch((error) => console.log(error));
});

module.exports = getTracks;
