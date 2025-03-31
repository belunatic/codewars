/*
Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string (alphabetical ascending), the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

URL: https://www.codewars.com/kata/5656b6906de340bd1b0000ac/train/javascript
*/

function longest(s1, s2) {
	let s3 = s1 + s2;

	const map = [];

	for (letter of s3) {
		map.includes(letter) ? "" : map.push(letter);
	}

	return map.sort().join("");
}

console.log("***Results twoToOne.js***");
console.log(longest("aretheyhere", "yestheyarehere"), "\t aehrsty");
console.log(
	longest("inmanylanguages", "theresapairoffunctions"),
	"\t acefghilmnoprstuy"
);
console.log("\n");
