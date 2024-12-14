/*
Write function bmi that calculates body mass index (bmi = weight / height2).

URL: https://www.codewars.com/kata/57a429e253ba3381850000fb/train/javascript
*/

function bmi(weight, height) {
	let result = weight / height ** 2;

	if (result <= 18.5) {
		return "Underweight";
	} else if (result <= 25) {
		return "Normal";
	} else if (result <= 30) {
		return "Overweight";
	} else {
		return "Obese";
	}
}

console.log("***Results calcBIM.js***");
console.log(bmi(50, 1.8), "Underweight");
console.log(bmi(80, 1.8), "Normal");
console.log(bmi(90, 1.8), "Overweight");
console.log(bmi(100, 1.8), "Obese");
console.log("\n");
