var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('back/index', { title: 'Express' });
});
router.get('/index.html', function(req, res, next) {
  res.render('back/index', { title: 'Express' });
});

// 
router.get('/smart-office.html', function(req, res, next) {
  res.render('back/smart-office', { title: 'Express' });
});
router.get('/office-se.html', function(req, res, next) {
  res.render('back/office-se', { title: 'Express' });
});
router.get('/shared-parking.html', function(req, res, next) {
  res.render('back/shared-parking', { title: 'Express' });
});
router.get('/shared-storage.html', function(req, res, next) {
  res.render('back/shared-storage', { title: 'Express' });
});
router.get('/cloud.html', function(req, res, next) {
  res.render('back/cloud', { title: 'Express' });
});
router.get('/baoguan.html', function(req, res, next) {
  res.render('back/baoguan', { title: 'Express' });
});
// 

router.get('/safirst.html', function(req, res, next) {
  res.render('back/safirst', { title: 'Express' });
});
router.get('/leBox.html', function(req, res, next) {
  res.render('back/leBox', { title: 'Express' });
});
router.get('/O_S.summary.html', function(req, res, next) {
  res.render('back/O_S.summary', { title: 'Express' });
});
router.get('/HISSSafe-summary.html', function(req, res, next) {
  res.render('back/HISSSafe-summary', { title: 'Express' });
});
router.get('/smart-access.html', function(req, res, next) {
  res.render('back/smart-access', { title: 'Express' });
});
// 
router.get('/customer-case.html', function(req, res, next) {
  res.render('back/customer-case', { title: 'Express' });
});
router.get('/news.html', function(req, res, next) {
  res.render('back/news', { title: 'Express' });
});
router.get('/about.html', function(req, res, next) {
  res.render('back/about', { title: 'Express' });
});


module.exports = router;
