'use strict';

var express = require('express');
var router = express.Router();

var User = require('../models/user');

router.get('/', function(req, res) {
  res.render('index');
});

router.use(User.authMiddleWare);

router.get('/protected', User.authMiddleWare, function(req, res) {
  console.log('req.user:', req.user);
  res.send('protected!');
});

module.exports = router;
