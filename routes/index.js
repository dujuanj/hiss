var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render表示调用模版引擎解析名字index的模板
  res.render('index', { title: 'Express' });
});
// 首页
router.get('/index.html', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
// 前于我们
router.get('/about.html', function(req, res, next) {
  res.render('about', { title: 'Express' });
});
// 新闻
router.get('/news.html', function(req, res, next) {
  res.render('news', { title: 'Express' });
});
// 产品中心
router.get('/product-center.html', function(req, res, next) {
  res.render('product-center', { title: 'Express' });
});
// 智能办公
router.get('/smart-office.html', function(req, res, next) {
  res.render('smart-office', { title: 'Express' });
});
// 共享空间
router.get('/office-se.html', function(req, res, next) {
  res.render('office-se', { title: 'Express' });
});
// 共享停车
router.get('/shared-parking.html', function(req, res, next) {
  res.render('shared-parking', { title: 'Express' });
});
// 共享仓储
router.get('/shared-storage.html', function(req, res, next) {
  res.render('shared-storage', { title: 'Express' });
});
// 智能安防云
router.get('/cloud.html', function(req, res, next) {
  res.render('cloud', { title: 'Express' });
});
// 保管柜
router.get('/baoguan.html', function(req, res, next) {
  res.render('baoguan', { title: 'Express' });
});
// 初柜
router.get('/safirst.html', function(req, res, next) {
  res.render('safirst', { title: 'Express' });
});
// 初柜功能
router.get('/safirst_function.html', function(req, res, next) {
  res.render('safirst_function', { title: 'Express' });
});
// 初柜设计
router.get('/safirst.design.html', function(req, res, next) {
  res.render('safirst.design', { title: 'Express' });
});
// 初柜技术规格
router.get('/safirstt_technical.html', function(req, res, next) {
  res.render('safirstt_technical', { title: 'Express' });
});
// 乐盒
router.get('/leBox.html', function(req, res, next) {
  res.render('leBox', { title: 'Express' });
});
// 乐盒设计
router.get('/disney.html', function(req, res, next) {
  res.render('disney', { title: 'Express' });
});
// 乐盒功能
router.get('/Function.html', function(req, res, next) {
  res.render('Function', { title: 'Express' });
});
// 乐盒技术规格
router.get('/technical_specifications.html', function(req, res, next) {
  res.render('technical_specifications', { title: 'Express' });
});
// phone
// router.get('/phone', function(req, res, next) {
//   res.render('back/index', { title: 'Express' });
// });
module.exports = router;
