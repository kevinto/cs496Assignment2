// redisHelper.js
// =============
var redisHelper = require('../helpers/redisHelper.js');

var title = "CS496 A2 View Page";

module.exports = {
  GetView: function(req, res, next) {
    var isPerson = redisHelper.getFromRedis("isPerson");
    var OS = redisHelper.getFromRedis("OS");
    var email = redisHelper.getFromRedis("email");
    var number = redisHelper.getFromRedis("number");
    var date = redisHelper.getFromRedis("date");
    var keys = ["isPerson", "OS", "email", "number", "date"];
    redisHelper.mgetFromRedis(keys, res, ShowView);
  }
};

function ShowView(res, params) {
    res.render('viewpage', { title: title, isPerson: params[0], OS: params[1], email: params[2], number: params[3], date: params[4] });
}
