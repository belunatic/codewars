/*
You're hanging out with your friends in a bar, when suddenly one of them is so drunk, that he can't speak, and when he wants to say something, he writes it down on a paper. However, none of the words he writes make sense to you. He wants to help you, so he points at a beer and writes "yvvi". You start to understand what he's trying to say, and you write a script, that decodes his words.

Keep in mind that numbers, as well as other characters, can be part of the input, and you should keep them like they are. You should also test if the input is a string. If it is not, return "Input is not a string".

URL: https://www.codewars.com/kata/558ffec0f0584f24250000a0/train/javascript
*/

function decode(str) {
	const orgAlp = "abcdefghijklmnopqrstuvwxyz";
	const revAlp = orgAlp.split("").reverse().join("");
	const hashAlp = {};
	let result = "";

	//check to see if str is a string
	if (typeof str !== "string") {
		return "Input is not a string";
	}

	//loop throught to create the hash map
	//include lowecase and uppercase
	for (let i = 0; i < orgAlp.length; i++) {
		hashAlp[orgAlp[i]] = revAlp[i];
		hashAlp[orgAlp[i].toUpperCase()] = revAlp[i].toUpperCase();
	}

	//loop through the string to decode it
	for (letter of str) {
		hashAlp[letter] ? (result += hashAlp[letter]) : (result += letter);
	}

	return result;
}

console.log("***Results decodeDrunk.js***");
console.log(decode("yvvi"), "\tbeer");
console.log(
	decode("Ovg'h hdrn rm gsv ulfmgzrm!"),
	"\tLet's swim in the fountain!"
);
console.log(decode({ brand: "Starobrno" }), "\tInput is not a string");
console.log(decode("Tl slnv, blf'iv wifmp"), "\tGo home, you're drunk");

console.log("\n");
