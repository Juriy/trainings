
var cup = {
	material: "metal",
	isHot: false,
	color: 0xCCC
};

cup.contents = 'coffee';

function printCup(cupToPrint) {
	console.log("This is a cup of",
		cupToPrint.contents);
	console.log("This cup is", 
		getHotAdjective(cupToPrint));
	console.log("This cup is made of", 
		cupToPrint.material);
	
	if (cupToPrint.material == "glass") {
		console.log("This cup is fragile");
	}
}

function getHotAdjective(cupToPrint) {
	if (cupToPrint.isHot) {
		return "hot";
	} else {
		return "warm";
	}
}

printCup(cup);