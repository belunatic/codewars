/*
The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
Examples

"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 

URL: https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/javascript
*/
function duplicateEncode(word) {
	//create a  map object
	//then reassign it a value of "(" or ")" for duplicates"
	let mapChar = {};
	let resultString = "";
	//remove the case sensitivity
	let wordLowerCase = word.toLowerCase();

	//loop thru the argument and assign the "(" and ")"
	for (char of wordLowerCase) {
		mapChar[char] = mapChar[char] ? ")" : "(";
	}

	//loop thru the argument and reassign the argument with appropriate bracket
	for (char of wordLowerCase) {
		resultString += mapChar[char];
	}

	return resultString;
}

console.log("***Results duplicateEncoder.js***");
console.log(duplicateEncode("din"), "(((");
console.log(duplicateEncode("recede"), "()()()");
console.log(duplicateEncode("Success"), ")())())");
console.log(duplicateEncode("(( @"), "))((");
console.log(duplicateEncode("eeeewwwww!"), "))))))))(");
console.log("\n");
