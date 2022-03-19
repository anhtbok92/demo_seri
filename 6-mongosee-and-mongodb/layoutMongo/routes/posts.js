var express = require('express');
var router = express.Router();
const path = require('path');
const BlogPost = require('../models/BlogPost.js');

router.get('/new', function(req, res, next) {
    res.render('create');
});

router.post('/store', function(req, res, next) {
    // console.log('req-----', req);
    let image = req.files.image;
    console.log('image-----', image);
    image.mv(path.resolve(__dirname, '..', '/public/upload', image.name), function (error) {
        BlogPost.create({
            ...req.body,
            image: '/upload/' + image.name
        }, function (err) {
            res.redirect('/')
        })
    })
});

router.get('/:id', function(req, res, next) {
    BlogPost.findById(req.params.id, function (error, detailPost) {
        res.render('post', {
            detailPost
        })
    })
});

module.exports = router;
