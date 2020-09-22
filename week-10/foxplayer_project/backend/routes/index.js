const express = require('express');
const getTracks = require('./get-tracks.js');
const postTracks = require('./post-playlists.js');

const router = express.Router();

router.use(getTracks);
router.use(postTracks);

router.get('/', (req, res) => {
  res.sendStatus(500);
});

module.exports = router;