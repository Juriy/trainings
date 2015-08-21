var app = angular.module('bookstore');

app.filter('limitBy', function() {
	return function(text, maxLen) {
		var cut = text.substr(0, maxLen);
		return cut.substr(0, 
			Math.min(cut.length, cut.lastIndexOf(' ')));
	};
});

app.filter('asPlainText', function() {
	return function(html) {
		return html ? html.replace(/<(?:.|\n)*?>/gm, '') : '';
	};
});