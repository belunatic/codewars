/*
Given an array of ones and zeroes, convert the equivalent binary value to an integer.

Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

URL: https://www.codewars.com/kata/578553c3a1b8d5c40300037c/train/javascript
*/

const binaryArrayToNumber = (arr) => {
	//join together the array to form a binary
	//parse it into Int using base of 2
	return parseInt(arr.join(""), 2);
};

console.log("***Results onesAndZeros.js***");
console.log(
	binaryArrayToNumber([0, 0, 0, 1]),
	"1",
	"binaryArrayToNumber([0, 0, 0, 1]"
);
console.log(
	binaryArrayToNumber([0, 0, 1, 0]),
	"2",
	"binaryArrayToNumber([0, 0, 1, 0]"
);
console.log(
	binaryArrayToNumber([1, 1, 1, 1]),
	"15",
	"binaryArrayToNumber([1, 1, 1, 1]"
);

console.log("\n");
