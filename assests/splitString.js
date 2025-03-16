/*
"Robin Singh" ==> ["Robin", "Singh"]

"I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]

URL: https://www.codewars.com/kata/57e76bc428d6fbc2d500036d/train/javascript

*/

function stringToArray(string) {
	return string.split(" ");
}

console.log("***Results splitString.js***");
console.log(stringToArray("Robin Singh"), ["Robin", "Singh"]);
console.log(stringToArray("I love arrays they are my favorite"), [
	"I",
	"love",
	"arrays",
	"they",
	"are",
	"my",
	"favorite",
]);
console.log("\n");
