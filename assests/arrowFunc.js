/*
Time to test your basic knowledge in functions! Return the odds from a list:

[1, 2, 3, 4, 5]  -->  [1, 3, 5]
[2, 4, 6]        -->  []

URL: https://www.codewars.com/kata/559f80b87fa8512e3e0000f5/train/javascript
*/

function odds(values) {
	// arrow it
	return values.filter((el) => el % 2 !== 0);
}

console.log("***Results poemString.js***");

console.log(odds([1, 3, 5]), [1, 3, 5]);
console.log(odds([]), []);
console.log(odds([1, 2, 3, 4, 5, 6]), [1, 3, 5]);
console.log("\n");
