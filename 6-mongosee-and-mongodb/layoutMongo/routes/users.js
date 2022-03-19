var express = require('express');
var router = express.Router();
const User = require('../models/User')
const bcrypt = require('bcryptjs');

/* GET users listing. */
router.post('/login', function(req, res, next) {
  const { username, password } = req.body;
  User.findOne({ username: username }, (error, user) => {
    if (user) {
      bcrypt.compare(password, user.password, (error, same) => {
        if (same) { // if passwords match
          // store user session, will talk about it later
          res.redirect('/')
        } else {
          res.redirect('/auth/login')
        }
      })
    } else {
      res.redirect('/auth/login')
    }
  })
});

router.post('/register', function(req, res, next) {
  console.log('req-body123: ', req.body);
  User.create(req.body, (error, user) => {
    if (error) {
      console.log('error-register: ', error);
      return res.redirect('/auth/register')
    }
    res.redirect('/')
  })
});

module.exports = router;
