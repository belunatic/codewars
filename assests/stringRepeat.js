/*
Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

URL: https://www.codewars.com/kata/57a0e5c372292dd76d000d7e/train/javascript
*/
function repeatStr(n, s) {
	return s.repeat(n);
}

console.log("***Results stringRepeat.js***");
console.log(repeatStr(3, "*"), "***");
console.log(repeatStr(5, "#"), "#####");
console.log(repeatStr(2, "ha "), "ha ha ");
console.log("\n");
