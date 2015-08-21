var express = require('express');
var cors = require('cors')
var app = express();
 
app.use(cors());
 
app.get('/items/:kind/:id', function(req, res, next){
	res.json({msg: 'This is CORS-enabled for all origins!'});
});

app.get('/items/:kind', function(req, res, next){
	res.json({msg: 'This is CORS-enabled for all origins!'});
});

app.post('/items/:kind', function(req, res, next){
	res.json({msg: 'This is CORS-enabled for all origins!'});
});

app.put('/items/:kind/:id', function(req, res, next){
	res.json({msg: 'This is CORS-enabled for all origins!'});
});

app.delete('/items/:kind/:id', function(req, res, next){
	res.json({msg: 'This is CORS-enabled for all origins!'});
});

app.listen(8085, function(){
	console.log('REST server listening on port 8085');
});