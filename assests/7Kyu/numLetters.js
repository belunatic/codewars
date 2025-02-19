/*
Given an array of numbers (in string format), you must return a string. The numbers correspond to the letters of the alphabet in reverse order: a=26, z=1 etc. You should also account for '!', '?' and ' ' that are represented by '27', '28' and '29' respectively.

All inputs will be valid.



URL: https://www.codewars.com/kata/57ebaa8f7b45ef590c00000c/train/javascript
*/

function switcher(x) {
	const letters = "zyxwvutsrqponmlkjihgfedcba!? ";
	return x.map((el) => letters[el - 1]).join("");
}

console.log("***Results numLetters.js***");
console.log(
	switcher(["24", "12", "23", "22", "4", "26", "9", "8"]),
	"\t codewars"
);
console.log(
	switcher([
		"25",
		"7",
		"8",
		"4",
		"14",
		"23",
		"8",
		"25",
		"23",
		"29",
		"16",
		"16",
		"4",
	]),
	"\t btswmdsbd kkw"
);
console.log("\n");
