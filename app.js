var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var wxRouter = require('./routes/wx');

var loginRouter = require('./routes/api/login')

var orderLoginRouter = require("./routes/api/orderProject/orderLogin")

var app = express();

// view engine setup
var ejs = require('ejs');
app.engine('html', ejs.__express);
app.set('view engine', 'html');
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// 微信相关接口
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/wx',wxRouter);

// 博客项目后台接口
app.use('/api/login',loginRouter);

// 定制项目后台接口
app.use('/api/order/login',orderLoginRouter)



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
//全局，每一个请求都会走这段代码
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
