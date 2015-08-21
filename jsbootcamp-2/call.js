var f = function() {
	console.log(this.name);
};
var peter = {
	name: 'Peter',
	print: f
};
var jenny = {
	name: 'Jenny'
};
jenny.print = f;

var bobby = {
	name: 'Bobby'
};

function runOn(obj) {
	return function() {
		f.call(obj);
	}
}

// var f_ThatAlwaysRunsOnPeter = runOn(peter);

var f_ThatAlwaysRunsOnPeter = f.bind(peter);

bobby.print = f_ThatAlwaysRunsOnPeter;
