/*
Egg Talk.

Insert an egg after each consonant. If there are no consonants, there will be no eggs. Argument will consist of a string with only alphabetic characters and possibly some spaces.
Example

    hello => heggeleggleggo

    eggs => egegggeggsegg

    FUN KATA => FeggUNegg KeggATeggA

URL: https://www.codewars.com/kata/55ea5304685da2fb40000018/train/javascript
*/

function heggeleggleggo(word) {
	let vow = "aeiou AEIOU";
	let result = "";

	for (char of word) {
		if (vow.includes(char)) {
			result += char;
		} else {
			result = result + char + "egg";
		}
	}
	return result;
}

console.log("***Results eggs.js***");
console.log(heggeleggleggo("hello", "heggeleggleggo"));
console.log(heggeleggleggo("code here", "ceggodegge heggeregge"));
console.log(heggeleggleggo("FUN KATA", "FeggUNegg KeggATeggA"));
console.log("\n");
