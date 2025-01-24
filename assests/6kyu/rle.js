/*
Your task is to write such a run-length encoding. For a given string, return a list (or array) of pairs (or arrays) [ (i1, s1), (i2, s2), …, (in, sn) ], such that one can reconstruct the original string by replicating the character sx ix times and concatening all those strings. Your run-length encoding should be minimal, ie. for all i the values si and si+1 should differ.



URL: https://www.codewars.com/kata/546dba39fa8da224e8000467/train/javascript
*/

var runLengthEncoding = function (str) {
	let map = {};
	let result = [];
	//loop through the string
	for (let i = 0; i < str.length; i++) {
		//start mapping it
		map[str[i]] = map[str[i]] + 1 || 1;
		//if the next char is not equal the current char
		if (str[i] !== str[i + 1]) {
			//push it to the result array as an array
			result.push([map[str[i]], str[i]]);
			//then clear the map
			map = {};
		}
	}
	return result;
};

console.log("***Results rle.js***");
console.log(runLengthEncoding("abc"), [
	[1, "a"],
	[1, "b"],
	[1, "c"],
]);
console.log(runLengthEncoding("hello world!"), [
	[1, "h"],
	[1, "e"],
	[2, "l"],
	[1, "o"],
	[1, " "],
	[1, "w"],
	[1, "o"],
	[1, "r"],
	[1, "l"],
	[1, "d"],
	[1, "!"],
]);
console.log(runLengthEncoding(""), []);
console.log("\n");
