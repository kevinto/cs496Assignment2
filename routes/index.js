var express = require('express');
var router = express.Router();
var timeHelper = require('../helpers/timehelper.js');

var title = 'CS496 Assignment 2';

/* GET home page. */
router.get('/', function(req, res, next) {
  var dt = timeHelper.getCurrentServerDateTime();
  res.render('index', { title: title, displayDateTime: dt });
});

/* POST home page. */
router.post('/', function(req, res, next) {
  var dt = timeHelper.getCurrentServerDateTime();
  res.render('index', { title: "From POST", displayDateTime: dt });
});

module.exports = router;
