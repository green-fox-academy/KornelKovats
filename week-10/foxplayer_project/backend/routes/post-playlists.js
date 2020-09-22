const express = require('express');
const query = require('../database/database');

const postTracks = express.Router();

postTracks.post('/playlist-tracks/:playlist_id', (req, res) => {
  const { body } = req;
  const sqlQuery = 'INSERT INTO tracks(title,artist,duration,path,playlist_id) VALUES(?,?,?,?,?);';
  query(sqlQuery, [req,body.title,req.body.artist,req.body.duration,req.body.path,req.params.playlist_id])
    .then((tracks) => res.json(tracks))
    .catch((error) => console.log(error));
});

module.exports = postTracks;
