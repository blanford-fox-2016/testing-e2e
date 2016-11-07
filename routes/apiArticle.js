'use strict'
const express = require('express');
let router = express.Router();
const apiArticle = require('../controllers/apiArticleController');

/* GET home page. */
router.get('/', apiArticle.allArticles);

module.exports = router;
