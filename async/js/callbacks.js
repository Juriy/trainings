function get(url, cb) {
	var xhr = new XMLHttpRequest();
	xhr.open('GET', url);
	xhr.send();

	xhr.addEventListener('load', function() {
		var templateText = xhr.responseText;
		if (xhr.status != 200) {
			cb('Error, status is ' + xhr.status);
		} else {
			cb(null, templateText);
		}
	});

	xhr.addEventListener('error', function() {
		cb('Network Error');
	});
}

function getTemplate(cb) {
	get('template.html', cb);
}

function loadCatalog(cb) {
	get('data.json', function(err, result) {
		if (err) {
			cb(err);
		} else {
			cb(null, JSON.parse(result));
		}
	});
}

function renderBooks(template, books) {
	books.forEach(function(it) {
		renderBook(template, it);
	});
}

function renderBook(template, book) {
	var el = document.getElementById('book-list');
	el.innerHTML += template.replace('{{TITLE}}', book.title);
}

getTemplate(function(err, template) {
	if (err) {
		console.log('Could not load template', err);
	} else {
		loadCatalog(function(err, catalog) {
			if (err) {
				console.log('Could not load catalog', err);
			} else {
				renderBooks(template, catalog);				
			}
		});
	}
});

// Here the template is not yet loaded
