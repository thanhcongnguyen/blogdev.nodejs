var express = require('express');
var router = express.Router();
var passport = require('../../src/auth/services/users');
var UserRepository= require('../../src/auth/repositories/users');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('homepage')
});

router.get('/login', function(req, res, next){
  res.render('login')
});
router.post('/login', passport.authenticate('local',{failureRedirect: '/users/logout', successRedirect: '/users'}),function(req, res, next){
    console.log('Authentication Successful');
    res.send('chao mung cac ban');
});

router.get('/logout', function(req, res, next){
  res.send('logout');
});

router.post('/register', function(req, res, next){
  res.send('register');
});

module.exports = router;
