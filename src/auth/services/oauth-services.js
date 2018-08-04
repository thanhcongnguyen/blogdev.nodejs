var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var passport = require('passport');
var moment = require('moment');
var LocalStrategy = require('passport-local').Strategy;
var BearerStrategy = require('passport-http-bearer').Strategy;
var userRepository = require('../repositories/users');
var accessTokenRepository = require('../repositories/oauth-access-tokens');
var db = require('../../../models');

passport.use(new LocalStrategy(
        function (username, password, done) {
                userRepository.findByUsername(username, function (err, user) {
                        if (err) { return done(err); }
                        if (!user) { return done(null, false); }
                        let match = bcrypt.compareSync(password, user.password);
                        var response = {};
                        if (match) {
                                let myAccessToken = jwt.sign({ username, password, date: Date().now }, 'blogdev.vn');
                                let myRefreshToken = jwt.sign({ username, password }, 'blogdev.vn');
                                return db.sequelize.transaction(t => {
                                        let oauth_access_tokens = db.oauth_access_tokens;
                                        let oauth_refresh_tokens = db.oauth_refresh_tokens;
                                        let time = Date.now() + (2 * 24 * 60 * 60 * 1000);
                                        let expireAt = moment.utc(time).format();

                                        return oauth_access_tokens.create({
                                                access_token: myAccessToken,
                                                user_id: user.id,
                                                scope: 'all',
                                                expires_at: expireAt
                                        },
                                                {
                                                        transaction: t
                                                })
                                                .then(result => {
                                                        let data_token = result.dataValues;
                                                        response.username = user.username;
                                                        response.email = user.email;
                                                        response.access_token = data_token.access_token;
                                                        return oauth_refresh_tokens.create({
                                                                refresh_token: myRefreshToken,
                                                                user_id: data_token.user_id,
                                                                expires_at: data_token.expires_at
                                                        },
                                                                {
                                                                        transaction: t
                                                                })
                                                })
                                }).then(result => {
                                        let data_refresh_token = result.dataValues;
                                        response.refresh_token = data_refresh_token.refresh_token;
                                        response.expires_at = data_refresh_token.expires_at;
                                        return done(null, response);
                                }).catch(error => {
                                        return done(error);
                                })

                        } else {
                                return done(null, false);
                        }
                });
        })
);

// passport.serializeUser(function(user, done) {
//     done(null, user.id);
// });

// passport.deserializeUser(function(id, done) {
//     userRepository.findById(id, function (err, user) {
//       if (err) { return done(err); }
//       done(null, user);
//     });
// });

passport.use(new BearerStrategy(
        function (token, done) {
                accessTokenRepository.findByToken(token, function (err, user) {
                        if (err) return done(err);
                        if (!user) return done(null, false);
                        return done(null, true);
                });
        }
));

function revokeToken(){
        
}

module.exports = passport;