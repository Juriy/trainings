var app = angular.module('bookstore', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			controller: 'BooksController',
			templateUrl: 'views/catalog.html'
		})
		// #/book/123
		.when('/book/:isbn', {
			controller: 'BookDetailsController',
			templateUrl: 'views/book-details.html'
		})
});


app.controller('BooksController', function($scope) {
	$scope.books = data;
});

app.controller('BookDetailsController', function($scope, $routeParams) {
	$scope.id = $routeParams.isbn;

	data.forEach(function(book) {
		if (book.isbn === $routeParams.isbn) {
			$scope.book = book;
		}
	});
});
