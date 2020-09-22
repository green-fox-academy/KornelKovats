const express = require('express');
const query = require('../database/database');

const deleteTracks = express.Router();

deleteTracks.delete('/playlist-tracks/:playlist_id/:track_id', (req, res) => {
  const sqlQuery = 'DELETE FROM tracks WHERE playlist_id=? and id=?;';
  query(sqlQuery,[req.params.playlist_id, req.params.track_id])
    .then(() => res.json('The track is deleted!'))
    .catch(() => res.json('error at the delete'));
});

module.exports = deleteTracks;