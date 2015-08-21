var http = require('http');
var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');
var session = require('express-session');
var errorHandler = require('errorHandler');
var socketio = require('socket.io');

var api = require('./api');

var app = express();

var server = http.createServer(app);

var io = socketio(server);

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

app.use('/api', api);

io.on('connection', function(socket) {

	socket.on('message', function(text) {
		console.log(text);
		io.emit('message', text);
	});

	console.log('A new client connected');
	socket.emit('message', 'Hello there!');
});


server.listen(3000);