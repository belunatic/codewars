/*
The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.


URL: https://www.codewars.com/kata/52efefcbcdf57161d4000091/train/javascript
*/

function count(string) {
	let map = {};

	for (char of string) {
		map[char] = map[char] + 1 || 1;
	}
	return map;
}

console.log("***Results countChar.js***");
console.log(count("a"), { a: 1 });
console.log(count("aba"), { a: 2, b: 1 });
console.log(count("ABC"), { A: 1, B: 1, C: 1 });
console.log("\n");
