/*
Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:

a -> 1
e -> 2
i -> 3
o -> 4
u -> 5

For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.

Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.

For example, decode("h3 th2r2") would return "hi there".

For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels.


URL: https://www.codewars.com/kata/53697be005f803751e0015aa/train/javascript
*/

function encode(string) {
	let map = { a: 1, e: 2, i: 3, o: 4, u: 5 };
	return string
		.split("")
		.map((el) => (map[el] ? map[el] : el))
		.join("");
}

function decode(string) {
	let alpha = ["1", "2", "3", "4", "5"];
	let vow = ["a", "e", "i", "o", "u"];

	return string
		.split("")
		.map((el) => {
			const index = alpha.indexOf(el);
			return index < 0 ? el : vow[index];
		})
		.join("");
}

console.log("***Results vowelCode.js***");
console.log(encode("hello"), "\t h2ll4");
console.log(encode("How are you today?"), "\t H4w 1r2 y45 t4d1y?");
console.log(
	encode("This is an encoding test."),
	"\t Th3s 3s 1n 2nc4d3ng t2st."
);
console.log(decode("h2ll4"), "\t hello");
console.log(decode("abel knows me"), "\t 1b2l kn4ws m2");
console.log("\n");
