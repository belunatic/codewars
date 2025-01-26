/*
remember("apple") => returns ["p"]
remember("apPle") => returns []          // no repeats, "p" != "P"
remember("pippi") => returns ["p","i"]   // show "p" only once
remember('Pippi') => returns ["p","i"]   // "p" is repeated first



URL: https://www.codewars.com/kata/55a243393fb3e87021000198/train/javascript
*/

function remember(str) {
	const map = {};
	let result = [];
	console.log(str);
	for (char of str) {
		map[char] = map[char] + 1 || 1;
		if (map[char] > 1 && result.indexOf(char) === -1) {
			result.push(char);
		}
	}
	return result;
}

console.log("***Results remember.js***");
console.log(remember("appless"), ["p", "s"]);
console.log(remember("limbojackassin the garden"), [
	"a",
	"s",
	"i",
	" ",
	"e",
	"n",
]);
console.log(remember("11pinguin"), ["1", "i", "n"]);
console.log("\n");
