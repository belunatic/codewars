/*
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.


URL: https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/train/javascript
*/

function findShort(s) {
	let stringArr = s.split(" ");
	let small = stringArr[0].length;
	stringArr.forEach((el) => {
		el.length < small ? (small = el.length) : "";
	});

	return small;
}

console.log("***Results shortestWord.js***");
console.log(
	findShort("bitcoin take over the world maybe who knows perhaps"),
	3
);
console.log(
	findShort(
		"turns out random test cases are easier than writing out basic ones"
	),
	3
);
console.log(findShort("Let's travel abroad shall we"), 2);
console.log("\n");
