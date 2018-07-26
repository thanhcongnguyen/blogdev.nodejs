var passport = require('passport');
var StrategyLocal = require('passport-local').Strategy;
var UserRepository = require('../repositories/users');

passport.use(new StrategyLocal(
    function(username, password, cb) {
        UserRepository.findByUsername(username, function(err, user) {
        console.log(user);
        if (err) { return cb(err); }
        if (!user) { return cb(null, false); }
        if (user.password != password) { return cb(null, false); }
        return cb(null, user);
      });
}));

passport.serializeUser(function(user, cb) {
    cb(null, user.id);
});

passport.deserializeUser(function(id, cb) {
    UserRepository.findById(id, function (err, user) {
      if (err) { return cb(err); }
      cb(null, user);
    });
});

module.exports = passport;