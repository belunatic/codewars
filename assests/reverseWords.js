/*
Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

URL: https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/train/javascript
*/

function reverseWords(str) {
	//split the string using white space
	//loop through the split string, split that string, reverse the array and join it back
	//join the string back using white space
	return str
		.split(" ")
		.map((el) => el.split("").reverse().join(""))
		.join(" ");
}

console.log("***Results reverseWords.js***");
console.log(
	reverseWords("The quick brown fox jumps over the lazy dog."),
	"ehT kciuq nworb xof spmuj revo eht yzal .god"
);
console.log(reverseWords("a b c d"), "a b c d");
console.log(
	reverseWords("  double  spaced  words  "),
	"  elbuod  decaps  sdrow  "
);

console.log("\n");
