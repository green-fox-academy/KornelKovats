const express = require('express');
const apiQuestions = require('./questions');
const apiGame = require('./game');
const apiDelete = require('./delete');

const router = express.Router();

router.use('/api', apiQuestions);
router.use('/api', apiGame);
router.use('/api', apiDelete);

module.exports = router;