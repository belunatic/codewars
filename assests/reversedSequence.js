/*
Build a function that returns an array of integers from n to 1 where n>0.

Example : n=5 --> [5,4,3,2,1]


URL: https://www.codewars.com/kata/5a00e05cc374cb34d100000d/train/javascript
*/

const reverseSeq = (n) => {
	let arr = [];
	while (n > 0) {
		arr.push(n);
		n--;
	}

	return arr;
};

console.log("***Results reversedSequence.js***");
console.log(reverseSeq(5), [5, 4, 3, 2, 1]);
console.log("\n");
