var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('authenticate');
});

router.get('/login', function(req, res, next){
  res.send('login');
});

router.post('/logout', function(req, res, next){
  res.send('logout');
});

router.post('/register', function(req, res, next){
  res.send('register');
});

module.exports = router;
