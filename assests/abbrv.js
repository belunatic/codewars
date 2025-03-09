/*
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F

URL: https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/train/javascript
*/

function abbrevName(name) {
	return name
		.split(" ")
		.map((el) => el[0].toUpperCase())
		.join(".");
}

console.log("***Results abbrv.js***");
console.log(abbrevName("Sam Harris"), "S.H");
console.log(abbrevName("Evan Cole"), "E.C");
console.log(abbrevName("David Mendieta"), "D.M");
console.log("\n");
