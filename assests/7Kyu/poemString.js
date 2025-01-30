/*
Write a function, format_poem() that takes a string like the one line example as an argument and returns a new string that is formatted across multiple lines with each new sentence starting on a new line when you print it out.

Try to solve this challenge with the str.split() and the str.join() string methods.

Every sentence will end with a period, and every new sentence will have one space before the previous period. Be careful about trailing whitespace in your solution.

URL: https://www.codewars.com/kata/550498447451fbbd7600041c/train/javascript
*/

function formatPoem(poem) {
	return poem.replaceAll(". ", ".\n");
}

console.log("***Results poemString.js***");

console.log(
	formatPoem(
		"Beautiful is better than ugly. Explicit is better than implicit. Simple is better than complex. Complex is better than complicated."
	),
	"--\nBeautiful is better than ugly.\nExplicit is better than implicit.\nSimple is better than complex.\nComplex is better than complicated."
);
console.log(
	formatPoem(
		"Flat is better than nested. Sparse is better than dense. Readability counts. Special cases aren't special enough to break the rules."
	),
	"--\nFlat is better than nested.\nSparse is better than dense.\nReadability counts.\nSpecial cases aren't special enough to break the rules."
);
console.log("\n");
