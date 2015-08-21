var arr = [1, 3, 4, 4, 1, 3, 1, 2];
arr.sort();

console.log(arr);

var startIndex = 0;
var el = arr[0];

for (var i = 1; i <= arr.length; i++) {
	if (arr[i] != el) {
		var numDeleted = i - startIndex - 1;
		arr.splice(startIndex, numDeleted);

		i -= numDeleted;
		startIndex = i;
		el = arr[i];
	}
}

console.log(arr);