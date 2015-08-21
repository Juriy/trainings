function BookStore() {
	this._id = 0;
	this._books = [];
}

var _p = BookStore.prototype;


_p.list = function(cb) {
	var self = this;
	process.nextTick(function() {
		cb(null, self._books);
	});
};

_p.add = function(title, cb) {
	var self = this;
	process.nextTick(function() {
		self._books.push({
			id: ++self._id,
			title: title
		});
		cb();
	});
}

_p.get = function(id, cb) {
	var self = this;
	process.nextTick(function() {
		for(var i = 0; i < self._books.length; i++) {
			if (id == self._books[i].id){
				return cb(null, self._books[i]);
			}
		}
		cb('Not found');
	});
}

_p.update = function(id, title, cb) {
	var self = this;
	process.nextTick(function() {
		for(var i = 0; i < self._books.length; i++) {
			if (id == self._books[i].id){
				self._books[i].title = title;
				break;
			}
		}
		cb();
	});
	
};

_p.delete = function(id, cb) {
	var self = this;
	process.nextTick(function() {
		for(var i = 0; i < self._books.length; i++) {
			if (id == self._books[i].id) {
				self._books.splice(i, 1);
				cb();
			}
		}
	})
}

module.exports = exports = BookStore;