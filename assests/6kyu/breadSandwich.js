/*
In this kata, we will define the following terms like so:

    Sandwich - Two slices of bread which may or may not have a filling
    Bread Sandwich - Two slices of bread which contains one slice of bread in the middle as a filling

You will need to build two functions:

    Given the number of slices of bread, return the phrase used to refer to the sandwich

     2 - 'sandwich'
     5 - 'bread sandwich sandwich'

    The reverse function - given the name of the sandwich, return how many slices of bread there are in the sandwich

    'bread sandwich' - 3
    'sandwich sandwich' - 4

    You should return None/null if there is no input / the input is invalid / there is no sandwich
    Maximum 100 slices of bread


URL: https://www.codewars.com/kata/622a6a822494ab004b2c68d2/train/javascript
*/

function slicesToName(n) {
	let num = n;
	let result = [];

	if (typeof num !== "number" || num <= 1) {
		return null;
	}
	while (num > 0) {
		if (num === 1) {
			result.unshift("bread");
		} else {
			result.unshift("sandwich");
		}
		num = num - 2;
	}

	return result.join(" ");
}

function nameToSlices(name) {
	let result = 0;
	let countBread = 0;

	if (
		typeof name !== "string" ||
		name === "" ||
		!name.includes("sandwich") ||
		name === "bread"
	) {
		return null;
	}
	let strArr = name.split(" ");
	if (strArr.includes("bread") && strArr.lastIndexOf("bread") !== 0) {
		return null;
	}

	strArr.forEach((el) => {
		if (el === "sandwich") {
			result += 2;
		} else {
			countBread++;
			result += 1;
		}
	});
	return result;
}

// have fun!

console.log("***Results breadSandwich.js***");
console.log(slicesToName(false), null);
console.log(slicesToName("bread"), null);
console.log(slicesToName(3), "bread sandwich");
console.log(
	slicesToName(11),
	"bread sandwich sandwich sandwich sandwich sandwich"
);
console.log("\n------");
console.log(nameToSlices(12), null);
console.log(nameToSlices("sandwich sandwich sandwich sandwich"), 8);
console.log(nameToSlices("bread sandwich bread sandwich"), null);
console.log(nameToSlices("bread sandwich"), 3);
console.log("\n");
