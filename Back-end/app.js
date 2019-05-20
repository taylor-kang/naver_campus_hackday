var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan');
var process = require('process');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var ordersRouter = require('./routes/orders');
var orderRouter = require('./routes/order');
var sellerRouter = require('./routes/seller');
var sequelize = require('./models').sequelize;

var app = express();
sequelize.sync();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/orders', ordersRouter);
app.use('/order', orderRouter);
app.use('/seller', sellerRouter);

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

process.on('uncaughtException', (err) => {
//  fs.writeSync(1, `Caught exception: ${err}\n`);
	console.dir(err);
});


module.exports = app;
