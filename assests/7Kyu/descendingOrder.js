/*
Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
Examples:

Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321


URL: https://www.codewars.com/kata/5467e4d82edf8bbf40000155/train/javascript
*/

function descendingOrder(n) {
	return Number(
		n
			.toString()
			.split("")
			.sort((a, b) => b - a)
			.join("")
	);
}

console.log("***Results descendingOrder.js***");
console.log(descendingOrder(0), "0");
console.log(descendingOrder(111), "111");
console.log(descendingOrder(1021), "2110");
console.log(descendingOrder(123456789), "987654321");
console.log("\n");
