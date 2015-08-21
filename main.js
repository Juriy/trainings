function decorateAsync(f, context) {
	return function() {
		// remove callback from the args
		var cb = arguments[arguments.length - 1];
		var args = Array.prototype.slice.call(arguments, 0, arguments.length - 1);
		process.nextTick(function() {
			try {
				cb(null, f.apply(context, args));
			} catch (e) {
				cb(e);
			}
		});
	}
}

function addSync(a, b) {
	throw "Oops";
	return a + b;
}

var add = decorateAsync(addSync);

add(1, 2, function(err, result) {
	if (err) {
		console.log("ERROR ", err);
	} else {
		console.log("RESULT ", result);
	}
});