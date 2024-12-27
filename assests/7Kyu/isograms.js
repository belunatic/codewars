/*
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter case)




URL: https://www.codewars.com/kata/54ba84be607a92aa900000f1/train/javascript
*/

function isIsogram(str) {
	//initiate a hash map object
	let strMap = {};

	for (char of str.toLowerCase()) {
		//if char exist in strMap add 1 to it or else initiate to 1
		strMap[char] = strMap[char] + 1 || 1;
		//if char repeats break and return false
		if (strMap[char] > 1) {
			return false;
		}
	}
	return true;
}

console.log("***Results isograms.js***");
console.log(isIsogram("Dermatoglyphics"), true);
console.log(isIsogram("aba"), false);
console.log(isIsogram("moOse"), false);
console.log("\n");
