/*
You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.

Write a program that returns the girl's age (0-9) as an integer.


URL: https://www.codewars.com/kata/557cd6882bfa3c8a9f0000c1/train/javascript
*/

function getAge(inputString) {
	return Number(inputString[0]);
}

console.log("***Results getAge.js***");
console.log(getAge("4 years old"), 4);
console.log(getAge("9 years old"), 9);
console.log("\n");
