"use strict"

function get(url) {
	function callXhr(resolve, reject) {
		var xhr = new XMLHttpRequest();
		xhr.open('GET', url);
		xhr.send();

		xhr.addEventListener('load', function() {
			var templateText = xhr.responseText;
			if (xhr.status != 200) {
				reject('Error, status is ' + xhr.status);
			} else {
				resolve(templateText);
			}
		});

		xhr.addEventListener('error', function() {
			reject('Network Error');
		});	
	}
	return new Promise(callXhr);
}

function getTemplate() {
	return get('template.html');
}

function getData() {
	return get('data.json');
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

Promise.all([getTemplate(), getData()])
	.then(arr => renderBooks(arr[0], JSON.parse(arr[1])));




