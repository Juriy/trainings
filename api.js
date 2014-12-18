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

	});

module.exports = router;