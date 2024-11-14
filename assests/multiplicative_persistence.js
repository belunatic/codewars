/*
Multiply all the digits of a nonnegative integer n by each other, repeating with the product until a single digit is obtained. The number of steps required is known as the multiplicative persistence.

Create a function that calculates the individual results of each step, not including the original number, but including the single digit, and outputs the result as a list/array. If the input is a single digit, return an empty list/array.

URL: https://www.codewars.com/kata/5c942f40bc4575001a3ea7ec/train/javascript
*/

function per(n) {
	let result = [];
	//loop until you have one number
	while (n.toString().length > 1) {
		n = n.toString().split("");
		n = n.reduce((acc, cur) => Number(acc) * Number(cur), 1);
		result.push(n);
	}

	return result;
}

console.log("***Results multiplicative persistence js***");
console.log(per(255), "[50, 0]");
console.log(per(69), "[54, 20, 0]");
console.log(
	per(277777788888899),
	"[4996238671872, 438939648, 4478976, 338688, 27648, 2688, 768, 336, 54, 20, 0]"
);
console.log("\n");
