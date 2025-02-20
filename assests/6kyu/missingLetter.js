/*
Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
The array will always contain letters in only one case.

Example:

['a','b','c','d','f'] -> 'e'
['O','Q','R','S'] -> 'P'


URL: https://www.codewars.com/kata/5839edaa6754d6fec10000a2/train/javascript
*/

function findMissingLetter(array) {
	let alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
	//find startig index
	let start = alpha.indexOf(array[0]);
	let result = "";
	//loop to find missing letter
	for (let i = 0; i < array.length; i++) {
		if (array[i] !== alpha[start]) {
			result = alpha[start];
			break;
		}
		start++;
	}

	return result;
}

console.log("***Results numLetters.js***");
console.log(findMissingLetter(["a", "b", "c", "d", "f"]), "\t e");
console.log(findMissingLetter(["O", "Q", "R", "S"]), "\t P");
console.log("\n");
