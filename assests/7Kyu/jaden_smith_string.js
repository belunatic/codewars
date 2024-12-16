/*
Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

URL: https://www.codewars.com/kata/5390bac347d09b7da40006f6/train/javascript
*/

String.prototype.toJadenCase = function () {
	//get the string
	let stringGiven = this;
	//split the string
	//map through te split array
	//slice the first letter then capitalize it and then concat to the rest of the word
	//join the split array back
	return stringGiven
		.split(" ")
		.map((el) => el.slice(0, 1).toUpperCase() + el.slice(1))
		.join(" ");
};

const str = "How can mirrors be real if our eyes aren't real";

console.log("***Results jaden_smith_string.js***");
console.log(
	str.toJadenCase(),
	"How Can Mirrors Be Real If Our Eyes Aren't Real"
);

console.log("\n");
