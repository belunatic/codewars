/*
Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

URL: https://www.codewars.com/kata/558fc85d8fd1938afb000014/train/javascript
*/

function sumTwoSmallestNumbers(numbers) {
	//sort the array
	const sortArray = numbers.sort((a, b) => a - b);
	//get the fist two index value and add them
	return sortArray[0] + sortArray[1];
}

console.log("***Results lowestPositiveNumbers.js***");
console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]), "13");
console.log(sumTwoSmallestNumbers([3, 87, 45, 12, 7]), "10");
console.log(sumTwoSmallestNumbers([23, 71, 33, 82, 1]), "24");
console.log("\n");
