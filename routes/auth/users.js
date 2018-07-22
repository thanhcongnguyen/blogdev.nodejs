var express = require('express');
var router = express.Router();
var passport = require('../../src/auth/services/users');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('authenticate');
});

router.get('/login', passport.authenticate('local',{failureRedirect: '/logout'}),function(req, res, next){
    console.log('Authentication Successful');
    res.redirect('/');
});

router.get('/logout', function(req, res, next){
  res.send('logout');
});

router.post('/register', function(req, res, next){
  res.send('register');
});

module.exports = router;
