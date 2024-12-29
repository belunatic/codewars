/*
Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!

URL: https://www.codewars.com/kata/55f2b110f61eb01779000053/train/javascript
*/

function getSum(a, b) {
	let result = 0;
	if (a > b) {
		while (b <= a) {
			result += b;
			b++;
		}
	} else {
		while (a <= b) {
			result += a;
			a++;
		}
	}
	return result;
}

console.log("***Results sumofnumbers3.js***");
console.log(getSum(0, -1), "-1");
console.log(getSum(0, 1), "1");
console.log(getSum(2, 2), "2");
console.log("\n");
