var express = require('express');
var router = express.Router();
var timeHelper = require('../helpers/timehelper.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  var dt = timeHelper.getCurrentServerDateTime();
  res.render('index', { title: 'CS496 Assignment 2', displayDateTime: dt });
});

module.exports = router;
