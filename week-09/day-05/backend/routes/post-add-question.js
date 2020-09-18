const express = require('express');
const db = require('../database/database');

const apiPostQuestion = express.Router();

apiPostQuestion.post('/questions', (req, res) => {
    
});

module.exports = apiPostQuestion;