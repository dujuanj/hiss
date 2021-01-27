var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/public/stylesheets/style.css', function(req, res, next) {
  // res.render表示调用模版引擎解析名字index的模板
  res.render('style');
});

module.exports = router;
