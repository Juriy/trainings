// Null
// Undefined

var books = [
	{
		title: "The Time Machine",
		pageCount: 120,
		rating: 300
	},
	{
		title: "Lord of the Rings",
		pageCount: 800,
		rating: 400
	},
	{
		title: "Hobbit",
		pageCount: 400,
		rating: 200
	}
];


var book = {
	title: "The Time Machine"
}

var cars = [
	{
		name: "Renault",
		weight: 4
	},
	{
		name: "Huge Truck",
		weight: 8
	}
];

function compareBy(prop) {
	return function(item1, item2) {
		return item1[prop] > item2[prop];
	}
}

function findBiggestItem(items, comparator) {
	var maxItem = items[0];
	for (var i = 1; i < items.length; i++) {
		if (comparator(items[i], maxItem)) {
			maxItem = items[i];
		}
	}
	return maxItem;
}

var compareBooks = compareBy('pageCount');
console.log(findBiggestItem(books, compareBooks));
console.log(findBiggestItem(cars, compareBy('weight')));


