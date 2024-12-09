/*
For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

URL: https://www.codewars.com/kata/546e2562b03326a88e000020/train/javascript
*/

function squareDigits(num) {
	//turn the number into a string
	//split it
	//use map function to square the number
	//join the array
	//return the number
	return Number(
		num
			.toString()
			.split("")
			.map((el) => el ** 2)
			.join("")
	);
}

console.log("***Results squareEveryDigit.js***");
console.log(squareDigits(9119), "811181");
console.log(squareDigits(765), "493625");
console.log(squareDigits(111), "111");
console.log(squareDigits(234), "4916");
console.log("\n");
