/*
In this Kata, you will be given two strings a and b and your task will be to return the characters that are not common in the two strings. 


URL: https://www.codewars.com/kata/5a262cfb8f27f217f700000b/train/javascript
*/

function solve(a, b) {
	let result = [];
	a.split("").forEach((el) => (b.includes(el) ? "" : result.push(el)));
	b.split("").forEach((el) => (a.includes(el) ? "" : result.push(el)));
	return result.join("");
}

console.log("***Results uniqueString.js***");
console.log(solve("xyab", "xzca"), "\t ybzc");
console.log(solve("xyabb", "xzca"), "\t ybbzc");
console.log(solve("abcd", "xyz"), "\t abcdxyz");
console.log(solve("xxx", "xzca"), "\t zca");
console.log("\n");
