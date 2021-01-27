var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/phone');


var nunjucks = require('nunjucks');
const { execPath } = require('process');

var app = express();

nunjucks.configure('views', {
  autoescape: true,
  express: app,
  watch: true
});

//设置了模版文件夹的路径
app.set('views', [path.join(__dirname, 'views'),path.join(__dirname,'views/back')]);
//  设置使用的模版引擎
app.set('view engine', 'html');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);
app.use('/phone', usersRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


// app.all('*', function (req, res) {
//   res.render(req.url.split('/')[1]);
// });





module.exports = app;
