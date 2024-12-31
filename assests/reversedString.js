/*
'world'  =>  'dlrow'
'word'   =>  'drow'


URL: https://www.codewars.com/kata/5168bb5dfe9a00b126000018/train/javascript
*/

function solution(str) {
	return str.split("").reverse().join("");
}

console.log("***Results reverseString.js***");
console.log(solution("world"), "dlrow");
console.log(solution("hello"), "olleh");
console.log(solution(""), "");
console.log(solution("h"), "h");
console.log("\n");
