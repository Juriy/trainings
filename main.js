
process.stdin.setEncoding('utf-8');
process.stdin.resume();

process.stdin.on('data', onUserInput);

console.log("Hello, please enter a name!");

function onUserInput(input) {
	console.log("Hello,",input);
}