/*
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false

URL: https://www.codewars.com/kata/55908aad6620c066bc00002a/train/javascript
*/

function XO(str) {
	let map = {};

	for (char of str.toLowerCase()) {
		map[char] = map[char] + 1 || 1;
	}

	return map["o"] === map["x"] ? true : false;
}

console.log("***Results exesAndOhs.js***");
console.log(XO("ooxx"), true);
console.log(XO("xooxx"), false);
console.log(XO("zpzpzpp"), true);
console.log(XO("zzoo"), false);
console.log("\n");
