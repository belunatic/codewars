/*
Write a function that returns a sequence (index begins with 1) of all the even characters from a string. If the string is smaller than two characters or longer than 100 characters, the function should return "invalid string".

For example:

"abcdefghijklm" --> ["b", "d", "f", "h", "j", "l"]
"a"             --> "invalid string"

URL: https://www.codewars.com/kata/566044325f8fddc1c000002c/train/javascript
*/

function evenChars(string) {
	//checking to see if char is less than 2 and more than 100
	if (string.length < 2 || string.length > 100) {
		return "invalid string";
	}
	//initiate the index
	let index = 1;
	let evenChar = [];

	while (index <= string.length) {
		//find the even char
		if (index % 2 === 0) {
			//       add them to an array
			evenChar.push(string[index - 1]);
		}
		index++;
	}

	return evenChar;
}

console.log("***Results evenChar.js***");
console.log(evenChars("abcdefghijklm"), '\t ["b", "d", "f", "h", "j", "l"]');
console.log(evenChars(""), '\t "invalid string" ');
console.log("\n");
