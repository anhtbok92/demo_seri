var express = require('express');
var router = express.Router();
const BlogPost = require('../models/BlogPost');

router.get('/', function(req, res, next) {
  BlogPost.find({}, function (error, posts) {
    console.log(posts);
    res.render('index', {
      blogposts: posts
    });
  });
});

module.exports = router;
