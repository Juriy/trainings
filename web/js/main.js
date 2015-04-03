var parent = document.querySelector('.book-catalog');

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

function init() {
	books.forEach(addBook);
	

	var button = document.getElementById('login-button');
	button.addEventListener('click', function(e) {
		e.preventDefault();

		var login = document.getElementById('login').value;
		var pass = document.getElementById('pass').value;
		console.log(login, pass);
	});

	getAllBooks();
}

function doUselessStuff() {
	var sum = 0;
	for (var i = 0; i < 100000000; i++) {
		sum += Math.random()*Math.random()
				*Math.random()*Math.random();
	}
	console.log(sum);
}

function getAllBooks() {
	var xhr = new XMLHttpRequest();

	xhr.onreadystatechange = function(e) {
		if (xhr.readyState == 4) {
			var response = JSON.parse(xhr.responseText);
			console.log(response.length);

		}
	};

	xhr.open("GET", "data/data");
	//xhr.send("HELLO WORLD");
}



init();