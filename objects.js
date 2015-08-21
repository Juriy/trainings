// Object
var foo = {

};

foo.firstName = "John";
foo.lastName = "Doe";

console.log(foo.firstName, 
	foo.lastName);

var bar = foo;

console.log(bar.firstName, 
	bar.lastName);

// foo(); // will not work