var parent = document.querySelector('.book-catalog');

books.forEach(addBook);

function addBook(book) {
	var el = document.createElement('li');
	var template = getBookTemplate();
	template = template
		.replace('{{BOOK_NAME}}', book.title)
		.replace('{{IMAGE}}', book.images.medium)
		.replace('{{DESCRIPTION}}', book.description);

	el.innerHTML = template;
	parent.appendChild(el);
}

function getBookTemplate() {
	var templateElement = 
		document.getElementById('book-template');
	return templateElement.innerHTML;
}


// el.innerHTML = books[0].title;

