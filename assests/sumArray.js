/*
Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

URL: https://www.codewars.com/kata/53dc54212259ed3d4f00071c/train/javascript
*/

function sum(numbers) {
	return numbers.reduce((acc, curVal) => acc + curVal, 0);
}

console.log("***Results sumArrays.js***");
console.log(sum([1, 5.2, 4, 0, -1]), "9.2");
console.log(sum([]), "0");
console.log(sum([-2.398]), "-2.398");
console.log("\n");
