/*
The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.
Task

Given a year, return the century it is in.

URL: https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097/train/javascript
*/

function century(year) {
	return Math.ceil(year / 100);
}

console.log("***Results centuryyears.js***");
console.log(century(1705), "18");
console.log(century(1900), "19");
console.log(century(89), "1");
console.log("\n");
