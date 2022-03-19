var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
  const { body } = req;
  console.log('body-', body);
  res.render("user", { body });
});

module.exports = router;
