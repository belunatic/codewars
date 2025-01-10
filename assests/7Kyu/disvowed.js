/*
Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.

URL: https://www.codewars.com/kata/52fba66badcd10859f00097e/train/javascript
*/

function disemvowel(str) {
	const vowArr = "aeiou";
	return str
		.split("")
		.filter((el) => !vowArr.includes(el.toLowerCase()))
		.join("");
}

console.log("***Results disvowed.js***");
console.log(
	disemvowel("This website is for losers LOL!"),
	"Ths wbst s fr lsrs LL!"
);
console.log(disemvowel("What are you, a communist?"), "Wht r y,  cmmnst?");
console.log("\n");
