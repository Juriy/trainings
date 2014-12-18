var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var BookSchema = new Schema({
	title: String
});

var Book = mongoose.model('books', BookSchema);

mongoose.connect('mongodb://localhost:27017/test', function(err) {
	if(err) {
		console.log("Something is bad", err);
	} else {
		console.log('Connected');
	}
});

function MongoBookStore() {

}

MongoBookStore.prototype.list = function(cb) {
	Book.find(cb);
};

MongoBookStore.prototype.update = function(id, title, cb) {
	Book.findById(id, function(err, book) {
		// check error

		book.title = title;
		book.save(cb);
	});
};

module.exports = MongoBookStore;