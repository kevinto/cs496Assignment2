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
  var action = req.body.action;
  if (typeof(action) != "undefined" && action == "add_form_info") {
    var isPerson = typeof(req.body.isPerson) == "undefined" ? "" : req.body.isPerson;
    //var result = redisHelper.insertIntoRedis("isPerson", isPerson);
    
    // Add form values to the database
    for (var k in req.body) {
      if (req.body.hasOwnProperty(k)) {
        //console.log("key: " + k + ", value: " + req.body[k]); // For Debugging
        
        // Skip the hidden field 
        if (k == "action") {
          continue; 
        }
        
        // Add field to the database 
        var result = redisHelper.insertIntoRedis(k, req.body[k]);
        if (result == false) {
          console.log("Error occurred on redis insert");
        }
      }
    }
    
    res.render('editpage', { title: title, isPerson: isPerson });
  }
  else {
    res.render('editpage', { title: title });
  }
  
});

module.exports = router;
