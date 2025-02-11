/*
Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

Mind the input validation.

URL: https://www.codewars.com/kata/576b93db1129fcf2200001e6/train/javascript
*/

function sumArray(array) {
	//check for an Array or length of it
	if (!Array.isArray(array) || array.length < 2) {
		return 0;
	}
	//sort
	array.sort((a, b) => a - b);
	//remove the max number
	array.pop();
	//remove the min number
	array.shift();
	//sum the array values
	return array.reduce((val, acc) => val + acc, 0);
}

console.log("***Results sumHL.js***");
console.log(sumArray([3, 5]), 0);
console.log(sumArray([6, 2, 1, 8, 10]), 16);
console.log(sumArray([6]), 0);
console.log(sumArray([6, 2, 5, 7, 3]), 14);
console.log(sumArray([6, 1, 10]), 6);
console.log("\n");
