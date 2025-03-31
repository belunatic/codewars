/*

Input: "Did I only have two cups of coffee this morning? I need more." Output: "Did I only have two cups of COFFEE this morning? I need more."

Input: "Coffee! Buy me a COFFEE!" Output: "COFFEE! Buy me a COFFEE!"

Good luck!

URL: https://www.codewars.com/kata/595d54bddddd7cf91800008c/train/javascript
*/

function coffee(str) {
	return str.replace(new RegExp("coffee", "ig"), "COFFEE");
}

console.log("***Results coffee.js***");
console.log(coffee("Is that coffee?"), "Is that COFFEE");
console.log("\n");
