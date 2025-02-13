/*
A Narcissistic Number (or Armstrong Number) is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).

For example, take 153 (3 digits), which is narcissistic:

    1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153

URL: https://www.codewars.com/kata/5287e858c6b5a9678200083c/train/javascript
*/

function narcissistic(value) {
	//find the length of value to determine the exponential
	let stringNum = value.toString();
	let exp = stringNum.length;
	let result = 0;
	//split the numbers
	//calculate the result
	stringNum.split("").forEach((el) => (result += el ** exp));
	return result === value ? true : false;
}

console.log("***Results doesNumLook.js***");
console.log(narcissistic(7), true);
console.log(narcissistic(371), true);
console.log(narcissistic(122), false);
console.log(narcissistic(4887), false);
console.log("\n");
