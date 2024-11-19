/*
Given the string representations of two integers, return the string representation of the sum of those integers.

URL: //www.codewars.com/kata/5324945e2ece5e1f32000370/train/javascript
*/

function sumStrings(a, b) {
	let result = [];
	//use of BigInt data type to convert the large numbers
	//Number data type can only handle number upto 2 ^53 -1
	result = BigInt(a) + BigInt(b);
	return result.toString();
}

console.log(sumStrings("123", "456"), "579");
console.log(
	sumStrings("712569312664357328695151392", "8100824045303269669937")
);

console.log("***Results from sumStringAsNumber.js file***");
console.log(sumStrings("123", "456"), "579");
console.log(
	sumStrings("712569312664357328695151392", "8100824045303269669937")
);
console.log("\n");
