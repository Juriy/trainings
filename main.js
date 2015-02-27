var favBook = {
	title: "The Hobbit",
	numPages: 123,
	isInteresting: true,
	author: {
		name: "J.R.R. Tolkien",
		dateOfBirth: ....
		country: "England"
	}
};

var state = 1;

function openUserInput() {
	process.stdin.setEncoding('utf-8');
	process.stdin.resume();
	process.stdin.on('data', onUserInput);	
}

function printBanner() {
	console.log("Hello, welcome to Book Worm!");
	console.log("type exit to exit");
	console.log("Enter a title of your favorite book");
}

function onUserInput(input) {
	input = normalizeInput(input)
	if (input == "exit") {
		process.exit();
	} else {
		
		if (state == 1) { // title 
			favBook.title = input;
			state = 2;
			console.log("Please enter the number of pages");

		} else if (state == 2) { // number of pages
			favBook.numPages = +input;
		}
		
		// 
		console.log(favBook.title, favBook.numPages);
	}
}

function normalizeInput(input) {
	return input.trim();
}

openUserInput();
printBanner();