/*
Given the string representations of two integers, return the string representation of the sum of those integers.

https://www.codewars.com/kata/5267faf57526ea542e0007fb/train/javascript
*/

Math.round = function (number) {
	//if number < 0.5 return number or else number +1
	if (number - parseInt(number) < 0.5) {
		return parseInt(number);
	} else return parseInt(number) + 1;
	//   return 0; // TODO: fix this
};

Math.ceil = function (number) {
	//check to see if a number is not a decimal
	//if it is return a the number
	//or else add one to the original number
	return number - parseInt(number) === 0 ? number : parseInt(number) + 1; // TODO: fix this
};

Math.floor = function (number) {
	return parseInt(number); // TODO: fix this
};

console.log("***Results from mathIssue.js file***");
console.log(Math.round(0.4), "Math.round(0.4)");
console.log(Math.round(0.5), "Math.round(0.5)");
console.log(Math.ceil(0.4), "Math.ceil(0.4)");
console.log(Math.ceil(0.5), "Math.ceil(0.5)");
console.log(Math.floor(0.4), "Math.floor(0.4)");
console.log(Math.floor(0.5), "Math.floor(0.5)");
console.log("\n");
