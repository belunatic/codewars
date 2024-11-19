/*
Given the string representations of two integers, return the string representation of the sum of those integers.

URL: //www.codewars.com/kata/5324945e2ece5e1f32000370/train/javascript
*/

https: function sumStrings(a, b) {
	let result = [];
	for (let i = 0; i < a.length; i++) {
		result.push(Number(a[i]) + Number(b[i]));
	}
	return result.join("");
}

console.log("***Results from sumStringAsNumber.js file***");
console.log(sumStrings("123", "456"), "579");
console.log("\n");
