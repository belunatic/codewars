/*
Write a function which calculates the average of the numbers in a given array.

Note: Empty arrays should return 0.


URL: https://www.codewars.com/kata/57a2013acf1fa5bfc4000921/train/javascript
*/

function findAverage(array) {
	// your code here
	return array.length !== 0
		? array.reduce((val, acc) => val + acc, 0) / array.length
		: 0;
}

console.log("***Results calAverage.jss***");
console.log(findAverage([1, 1, 1], 1));
console.log(findAverage([1, 2, 3], 2));
console.log(findAverage([1, 2, 3, 4], 2.5));

console.log("\n");
