var express = require('express');
var router = express.Router();
var timeHelper = require('../helpers/timehelper.js');
var redisHelper = require('../helpers/redisHelper.js');

var title = 'CS496 Assignment 2';

// GET call for edit page
router.get('/', function(req, res, next) {
  var dt = timeHelper.getCurrentServerDateTime();
  res.render('editpage', { title: title });
});

// POST call for edit page
router.post('/', function(req, res, next) {
  console.log("action: " + req.body.action);
  console.log("value for radio buttons: " + req.body.OS);
  console.log("value for email: " + req.body.email);
  console.log("value for number: " + req.body.number);
  console.log("value for date: " + req.body.date);
  
  var action = req.body.action;
  if (typeof(action) != "undefined" && action == "add_form_info") {
    var isPerson = typeof(req.body.isPerson) == "undefined" ? "" : req.body.isPerson;
    console.log("isPerson: " + isPerson);
    var result = redisHelper.insertIntoRedis("isPerson", isPerson);
    console.log("result: " + result);
    
    res.render('editpage', { title: title, isPerson: isPerson });
  }
  else {
    res.render('editpage', { title: title });
  }
  
});

module.exports = router;
