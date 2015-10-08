var express = require('express');
var router = express.Router();
var timeHelper = require('../helpers/timehelper.js');

var title = 'CS496 Assignment 2';

// GET call for edit page
router.get('/', function(req, res, next) {
  var dt = timeHelper.getCurrentServerDateTime();
  res.render('editpage', { title: title });
});

// POST call for edit page
router.post('/', function(req, res, next) {
  console.log("value for radio buttons: " + req.body.OS);
  console.log("value for email: " + req.body.email);
  console.log("value for number: " + req.body.number);
  console.log("value for date: " + req.body.date);
  
  var action = req.body.action;
  if (typeof(action) != "undefined" && action == "add_form_info") {
    var isPerson = req.body.isPerson;
    res.render('editpage', { title: title, isPerson: isPerson });
  }
  else {
    res.render('editpage', { title: title });
  }
  
});

module.exports = router;
