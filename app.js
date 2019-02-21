var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
	res.render('index.html');
});

app.get('/index.html', function (req, res) {
	res.render('index.html');
});

app.get('/documentation.html', function (req, res) {
	res.render('documentation.html');
});

app.get('/changelog.html', function (req, res) {
	res.render('changelog.html');
});

app.get('/logs/info.html', function (req, res) {
	res.render('logs/info.html');
});

app.get('/logs/1.0.html', function (req, res) {
	res.render('logs/1.0.html');
});

app.get('/logs/1.1.html', function (req, res) {
	res.render('logs/1.1.html');
});

app.get('/docs/info.html', function (req, res) {
	res.render('docs/info.html');
});

app.get('/docs/commands.html', function (req, res) {
	res.render('docs/commands.html');
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	next(createError(404));
});

//error handler
app.use(function(err, req, res, next) {
	// set locals
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};
	
	// render
	res.status(err.status || 500);
	res.render('error.html');
});

module.exports = app;