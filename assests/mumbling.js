/*
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"

The parameter of accum is a string which includes only letters from a..z and A..Z.

URL: https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/javascript
*/

function accum(s) {
	//lowercase the string coming in
	//going to use map to produce an array of letters in correspond to the index
	let resultArray = s
		.toLowerCase()
		.split("")
		.map((el, i) => {
			let count = 0;
			let letters = "";
			while (count < i + 1) {
				//if statement to check if it the first letter
				//if it is capitalize it
				//else add it to the letter variable
				count === 0 ? (letters = el.toUpperCase()) : (letters = letters + el);
				count++;
			}
			return letters;
		});

	//then join them together
	return resultArray.join("-");
}

console.log("***Results mumbling.js***");
console.log(accum("abcd"), "A-Bb-Ccc-Dddd");
console.log(accum("RqaEzty"), "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy");
console.log(accum("cwAt"), "C-Ww-Aaa-Tttt");
console.log(
	accum("ZpglnRxqenU"),
	"Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu"
);
console.log("\n");
