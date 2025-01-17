/*
You have to search all numbers from inclusive 1 to inclusive a given number x, that have the given digit d in it.
The value of d will always be 0 - 9.
The value of x will always be greater than 0.

You have to return as an array

    the count of these numbers,
    their sum
    and their product.

    For example:

x = 11
d = 1
->
Numbers: 1, 10, 11
Return: [3, 22, 110]

URL: https://www.codewars.com/kata/57ad85bb7cb1f3ae7c000039/train/javascript
*/

function numbersWithDigitInside(x, d) {
	let givenX = x;
	let digitArr = [];
	for (let i = 1; i <= x; i++) {
		if (i.toString().includes(d.toString())) {
			digitArr.push(i);
		}
	}

	if (digitArr.length === 0) {
		return [0, 0, 0];
	}

	return [
		digitArr.length,
		digitArr.reduce((el, acc) => el + acc, 0),
		digitArr.reduce((el, acc) => el * acc, 1),
	];
}

console.log("***Results digitInside.js***");
console.log(numbersWithDigitInside(5, 6), [0, 0, 0]);
console.log(numbersWithDigitInside(44, 4), [9, 286, 5955146588160]);
console.log(numbersWithDigitInside(11, 1), [3, 22, 110]);
console.log("\n");
