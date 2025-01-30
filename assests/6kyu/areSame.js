/*
Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.
Examples
Valid arrays

a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]

comp(a, b) returns true because in b 121 is the square of 11, 14641 is the square of 121, 20736 the square of 144, 361 the square of 19, 25921 the square of 161, and so on. It gets obvious if we write b's elements in terms of squares:

a = [121, 144, 19, 161, 19, 144, 19, 11] 
b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]

Invalid arrays

If, for example, we change the first number to something else, comp is not returning true anymore:

a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [132, 14641, 20736, 361, 25921, 361, 20736, 361]

comp(a,b) returns false because in b 132 is not the square of any number of a.

a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [121, 14641, 20736, 36100, 25921, 361, 20736, 361]


URL: https://www.codewars.com/kata/550498447451fbbd7600041c/train/javascript
*/

function comp(array1, array2) {
	let comp = true;
	let sqArray1 = null;
	//check to see if is an array and null
	if (!Array.isArray(array1) || !Array.isArray(array2)) {
		return false;
	}
	//take the array1 and square it
	sqArray1 = array1.map((el) => el * el);
	//then sort both given array and compare them with JSON.stringify
	return JSON.stringify(sqArray1.sort()) === JSON.stringify(array2.sort())
		? true
		: false;
}

console.log("***Results areSame.js***");
let a1 = [121, 144, 19, 161, 19, 144, 19, 11];
let a2 = [
	11 * 11,
	121 * 121,
	144 * 144,
	19 * 19,
	161 * 161,
	19 * 19,
	144 * 144,
	19 * 19,
];
console.log(comp(a1, a2), true);
console.log("\n");
