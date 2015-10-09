var express = require('express');
var router = express.Router();
var redisHelper = require('../helpers/redisHelper.js');

var title = 'CS496 Assignment 2';

// GET call for view page
router.get('/view', function(req, res, next) {
  //var dt = timeHelper.getCurrentServerDateTime();
  res.render('viewpage', { title: title });
});