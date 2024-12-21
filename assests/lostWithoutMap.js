/*
Given an array of integers, return a new array with each value doubled.

URL: https://www.codewars.com/kata/57f781872e3d8ca2a000007e/train/javascript
*/

function maps(x) {
	return x.map((el) => el * 2);
}

console.log("***Results losWithoutMap.js***");
console.log(maps([1, 2, 3]), "[2, 4, 6]");
console.log(maps([4, 1, 1, 1, 4]), "[8, 2, 2, 2, 8]");

console.log("\n");
