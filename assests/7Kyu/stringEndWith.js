/*
Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false


URL: https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d/train/javascript
*/

function solution(str, ending) {
	//this needed to be adjusted to fix an error on the test to pass it
	return ending === "" ? true : str.slice(-ending.length) == ending;
}

console.log("***Results stringEndWith.js***");
console.log(solution("abcde", "cde"), true);
console.log(solution("abcde", "rdf"), false);
console.log(solution(":-|", "-|"), true);
console.log(solution("this fails", "this pass"), false);
console.log("\n");
