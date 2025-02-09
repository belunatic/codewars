/*
Given an array of strings of the same letter type. Return a new array, which will differ in that the length of each element is equal to the average length of the elements of the previous array.

A few examples:

['u', 'y'] =>  ['u', 'y'] // average length is 1
['aa', 'bbb', 'cccc'] => ['aaa', 'bbb', 'ccc'] // average length is 3
['aa', 'bb', 'ddd', 'eee'] => ['aaa', 'bbb', 'ddd', 'eee'] // average length is 2.5 round up to 3

    If the average length is not an integer, use Math.round().
    The input array's length > 1

URL: https://www.codewars.com/kata/5a430359e1ce0e35540000b1/train/javascript

*/

function averageLength(array) {
	//get the average
	//get the substring
	//repeate it to the number of average
	let average;
	let sum = 0;

	array.forEach((el) => (sum += el.length));
	average = Math.round(sum / array.length);
	console.log(sum, average);

	return array.map((el) => el.charAt(0).repeat(average));
}

console.log("***Results aveLength.js***");
console.log(averageLength(["u", "y"]), ["u", "y"]);
console.log(averageLength(["aa", "bbb", "cccc"]), ["aaa", "bbb", "ccc"]);
console.log(averageLength(["aa", "bb", "ddd", "eee"]), [
	"aaa",
	"bbb",
	"ddd",
	"eee",
]);
console.log("\n");
