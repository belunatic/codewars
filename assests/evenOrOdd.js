/*

Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

https://www.codewars.com/kata/53da3dbb4a5168369a0000fe/train/javascript
*/

function evenOrOdd(number) {
	if (number % 2 === 0) {
		return "Even";
	} else return "Odd";
}

console.log("***Results from evenOrOdd.js file***");
console.log(evenOrOdd(342), "evenOrOdd(342)");
console.log(evenOrOdd(-3199), "evenOrOdd(-3199)");
console.log(evenOrOdd(0), "evenOrOdd(0)");
console.log("\n");
