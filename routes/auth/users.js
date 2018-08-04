var express = require('express');
var router = express.Router();
var oauthServices = require('../../src/auth/services/oauth-services');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('homepage')
});

router.get('/login', function(req, res, next){
  res.render('login')
});
router.post('/login', oauthServices.authenticate('local',{ session: false }),function(req, res, next){
    res.send(req.user);
});


router.get('/faild', function(req, res, next){
  res.send('logout');
});

router.post('/register',oauthServices.authenticate('bearer', { session: false }), function(req, res, next){
  res.send('register');
});

module.exports = router;
