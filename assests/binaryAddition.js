/*
Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

The binary number returned should be a string.

URL: https://www.codewars.com/kata/551f37452ff852b7bd000139/train/javascript
*/

function addBinary(a, b) {
	return (a + b).toString(2);
}

console.log("***Results binaryAddition.js***");
console.log(addBinary(1, 1), "10");
console.log(addBinary(5, 9), "1110");
console.log("\n");
