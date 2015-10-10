// redisHelper.js
// =============
var redisHelper = require('../helpers/redisHelper.js');

var title = "CS496 A2 View Page";

module.exports = {
  GetView: function(req, res, next) {
    res.render('viewpage', { title: title });
  }
};
