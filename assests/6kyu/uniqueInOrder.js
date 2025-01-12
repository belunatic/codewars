/*
For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]

URL: https://www.codewars.com/kata/54e6533c92449cc251001667/train/javascript
*/

var uniqueInOrder = function (iterable) {
	//your code here - remember iterable can be a string or an array
	//if string turn it into arr
	let arr = typeof iterable === "string" ? iterable.split("") : iterable;
	//store the previous element
	let prev = "";
	//filter the array
	return arr.filter((el) => {
		if (prev !== el) {
			prev = el;
			return el;
		}
	});
};

console.log("***Results uniqueInOrder.js***");
console.log(uniqueInOrder("AAAABBBCCDAABBB"), ["A", "B", "C", "D", "A", "B"]);
console.log(uniqueInOrder([1, 2, 2, 3, 3]), [1, 2, 3]);
console.log("\n");
