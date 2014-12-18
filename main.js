var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');
var session = require('express-session');
var errorHandler = require('errorHandler');

var app = express();

var sessionMiddleware = session({
	secret: 'keyboardcat',
	saveUninitialized: true,
	resave: true
});

app.use(express.static(__dirname + '/public'));
app.use(sessionMiddleware);
app.use(bodyParser.urlencoded({extended: true}));

app.post('/login', function(req, res, next) {
	// check names here
	req.session.login = req.body.login
	res.redirect('/chat.html');
});

app.get('/session', function(req, res) {
	res.json(req.session);
});

app.listen(3000);