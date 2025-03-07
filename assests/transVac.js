/*
Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

URL: https://www.codewars.com/kata/568d0dd208ee69389d000016/train/javascript
*/

function rentalCarCost(d) {
	if (d >= 7) {
		return d * 40 - 50;
	}
	if (d >= 3) {
		return d * 40 - 20;
	}

	return d * 40;
}

console.log("***Results transVac.js***");
console.log(rentalCarCost(1), 40);
console.log(rentalCarCost(3), 100);
console.log(rentalCarCost(10), 350);

console.log("\n");
