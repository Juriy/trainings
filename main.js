
var cup = {
	material: "glass",
	isHot: false,
	color: 0xCCC
};

cup.contents = 'coffee';

function printCup(cupToPrint) {
	console.log("This is a cup of",
		cupToPrint.contents);
	console.log("This cup is", getHotAdjective(cupToPrint));
}

function getHotAdjective(cupToPrint) {
	if (cupToPrint.isHot) {
		return "hot";
	} else {
		return "warm";
	}
}

printCup(cup);