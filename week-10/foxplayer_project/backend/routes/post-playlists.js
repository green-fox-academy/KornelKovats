const express = require('express');
const query = require('../database/database');

const postTracks = express.Router();

postTracks.post('/playlist-tracks/:playlist_id', (req, res) => {
  const { body } = req;
  const sqlQuery = 'INSERT INTO tracks(path,playlist_id) VALUES(?,?);';
  query(sqlQuery, [body.path, req.params.playlist_id])
    .then((tracks) => res.json(tracks))
    .catch((error) => console.log(error));
});

module.exports = postTracks;
