// redisHelper.js
// =============

module.exports = {
  getFromRedis: function(key) {
    GLOBAL.redis.get('name', function(error, result) {
      if (error) console.log('Error: '+ error);
      else return result;
    });
  },
  
  insertIntoRedis: function(key, value) {
    var result = GLOBAL.redis.set(key, value); 
    return result;
  } 
};
