/*
Complete the solution so that the function will break up camel casing, using a space between words.
Example

"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""

URL: https://www.codewars.com/kata/5208f99aee097e6552000148/train/javascript
*/

function solution(string) {
	//array to store the separate words
	//array to track the current word
	let word = "";
	let resultArr = [];

	//loop throught the string
	string.split("").forEach((el, i, arr) => {
		//if the current letter in the string is === to it capital
		//initialize the current word
		//then save the string in array
		if (el === el.toUpperCase()) {
			resultArr.push(word);
			word = el;
		} else if (i === arr.length - 1) {
			//add the last letter
			word += el;
			resultArr.push(word);
		} else {
			//else just add it to the word
			word += el;
		}
	});

	return string.length === 0 ? "" : resultArr.join(" ");
}

console.log("***Results breakCamelCase.js***");
console.log(solution(""), "");
console.log(solution("camelCasing"), "\tcamel Casing");
console.log(solution("camelCasingTest"), "\tcamel Casing Test");
console.log("\n");
