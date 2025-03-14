/*
Write a function that combines two arrays by alternatingly taking elements from each array in turn.

Examples:

[a, b, c, d, e], [1, 2, 3, 4, 5] becomes  [a, 1, b, 2, c, 3, d, 4, e, 5]

[1, 2, 3], [a, b, c, d, e, f] becomes [1, a, 2, b, 3, c, d, e, f]

Points:

    The arrays may be of different lengths, with at least one character/digit.
    One array will be of string characters (in lower case, a-z), a second of integers (all positive starting at 1).

URL: https://www.codewars.com/kata/583af10620dda4da270000c5/train/javascript
*/

function mergeArrays(a, b) {
	let bigArr = a.length > b.length ? a.length : b.length;
	let mergeArr = [];
	for (let i = 0; i < bigArr; i++) {
		if (a[i] !== undefined && b[i] !== undefined) {
			mergeArr.push(a[i]);
			mergeArr.push(b[i]);
		}
		if (a[i] !== undefined && b[i] === undefined) {
			mergeArr.push(a[i]);
		}
		if (b[i] !== undefined && a[i] === undefined) {
			mergeArr.push(b[i]);
		}
	}

	return mergeArr;
}

console.log("***Results mergeTwoArrays.js***");
console.log(mergeArrays([1, 2, 3, 4, 5, 6, 7, 8], ["a", "b", "c", "d", "e"]), [
	1,
	"a",
	2,
	"b",
	3,
	"c",
	4,
	"d",
	5,
	"e",
	6,
	7,
	8,
]);
console.log(mergeArrays(["a", "b", "c", "d", "e"], [1, 2, 3, 4, 5]), [
	"a",
	1,
	"b",
	2,
	"c",
	3,
	"d",
	4,
	"e",
	5,
]);
console.log("\n");
