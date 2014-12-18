var express = require('express');
var BookStore = require('./BookStore');
var router = express.Router();

var bookStore = new BookStore();
bookStore.add('Pride And Prejudice', function(err, result) {
	console.log('Book Added');
});

router.route('/books')
	.get(function(req, res) {
		bookStore.list(function(err, data) {
			res.json(data);
		});
	})
	.post(function(req, res) {
		// TO DO
	});

router.route('/books/:id')
	.get(function(req, res) {
		// TO DO
	})
	.put(function(req, res) {
		var bookId = req.params.id;
		var bookTitle = req.body.title;

		bookStore.update(bookId, bookTitle, function(err) {
			res.json({status: 'OK'});
		});
	});

module.exports = router;