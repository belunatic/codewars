/*
In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.


URL: https://www.codewars.com/kata/546f922b54af40e1e90001da/train/javascript
*/

function alphabetPosition(text) {
	const alphabetArray = [
		"a",
		"b",
		"c",
		"d",
		"e",
		"f",
		"g",
		"h",
		"i",
		"j",
		"k",
		"l",
		"m",
		"n",
		"o",
		"p",
		"q",
		"r",
		"s",
		"t",
		"u",
		"v",
		"w",
		"x",
		"y",
		"z",
	];
	//remove the case sensitivity by lowering the case
	//split the text to create an array
	//map through the array to get the index and add 1
	// filter the array to only return non empty char
	// then join the results
	return text
		.toLowerCase()
		.split("")
		.map((el) =>
			alphabetArray.indexOf(el) === -1 ? "" : alphabetArray.indexOf(el) + 1
		)
		.filter((el) => el !== "")
		.join(" ");
}

console.log("***Results replaceWithAlphabetPosition.js***");
console.log(
	alphabetPosition("The sunset sets at twelve o' clock."),
	"\n 20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"
);
console.log(
	alphabetPosition("The narwhal bacons at midnight."),
	"\n20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20"
);
console.log("\n");
