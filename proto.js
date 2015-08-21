function Book(title, pageCount) {
	if (!title) {
		throw 'Title can not be empty';
	}
	this.title = title;
	this.pageCount = pageCount;

	bindAll(this, 'toString', 'print');
}

function bindAll(obj) {
	var p = Object.getPrototypeOf(obj);
	for (var i = 1; i < arguments.length; i++) {
		var fName = arguments[i];
		obj[fName] = p[fName].bind(obj);
	}
}

var p = Book.prototype;

Book.prototype.toString = function() {
	return this.title + ', ' + this.pageCount + ' pages';
};

p.print = function() {
	console.log(this.toString());
};

function FictionBook(title, pageCount, genre) {
	Book.call(this, title, pageCount);
	this.genre = genre;
}

FictionBook.prototype = Object.create(Book.prototype);

FictionBook.prototype.toString = function() {
	return this.genre + ' ' + Book.prototype.toString.call(this);
};


var book = new Book('Alice in Wonderland', 200);
book.print();

var p = book.print;

p.call({});

