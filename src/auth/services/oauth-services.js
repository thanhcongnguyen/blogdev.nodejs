var passport = require('passport');
var StrategyLocal = require('passport-local').Strategy;
var UserRepository = require('../repositories/users');

passport.use(new StrategyLocal(
    function(username, password, done) {
        UserRepository.findByUsername(username, function(err, user) {
        console.log(user);
        if (err) { return done(err); }
        if (!user) { return done(null, false); }
        if (user.password != password) { return done(null, false); }
        return done(null, user);
      });
}));

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    UserRepository.findById(id, function (err, user) {
      if (err) { return done(err); }
      done(null, user);
    });
});

module.exports = passport;