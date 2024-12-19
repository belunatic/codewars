/*
Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

URL: https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript
*/

function findOdd(A) {
	//create a haspMap object
	let numMap = {};
	//loop to keep count fo the interger apperance
	//if the prop exist add to it or else initiate with 1
	A.map((el) => (numMap[el] = numMap[el] + 1 || 1));

	// loop again to return the interger with odd appearance
	for (prop in numMap) {
		if (numMap[prop] % 2 !== 0) {
			return Number(prop);
		}
	}
}

console.log("***Results reverseWords.js***");
console.log(
	findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]),
	"5"
);
console.log(findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5]), "-1");
console.log(findOdd([10]), "10");
console.log(findOdd([0, 1, 0, 1, 0]), "0");

console.log("\n");
