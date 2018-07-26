var passport= require('passport');
var StrategyBearer = require('passport-http-bearer').Strategy;
var AccessTokenRepository = require('../repositories/access-tokens');

passport.use(new StrategyBearer(
    function(id, cb) {
        AccessTokenRepository.findTokenById(id, function(err, user) {
        if (err) { return cb(err); }
        if (!user) { return cb(null, false); }
        return cb(null, user);
      });
    }));


module.exports = passport;

