/*
You get an array of numbers, return the sum of all of the positives ones.
Example

    [1, -4, 7, 12] => 1+7+12=20 1 + 7 + 12 = 20 1+7+12=20


URL: https://www.codewars.com/kata/5715eaedb436cf5606000381/train/javascript
*/

function positiveSum(arr) {
	return arr.reduce((acc, el) => (el > 0 ? acc + el : acc), 0);
}

console.log("***Results sumOfPositive.js***");
console.log(positiveSum([1, 2, 3, 4, 5]), 15);
console.log(positiveSum([1, -2, 3, 4, 5]), 13);
console.log(positiveSum([]), 0);
console.log(positiveSum([-1, -2, -3, -4, -5]), 0);
console.log(positiveSum([-1, 2, 3, 4, -5]), 9);
console.log("\n");
