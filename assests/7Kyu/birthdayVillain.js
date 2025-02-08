/*
Create a function that returns a villain name based on the user's birthday. The birthday will be passed to the function as a valid Date object, so for simplicity, there's no need to worry about converting strings to dates.

The first name will come from the month, and the last name will come from the last digit of the date:


URL: https://www.codewars.com/kata/536c00e21da4dc0a0700128b/train/javascript
*/

function getVillainName(birthday) {
	const m = [
		"Evil",
		"Vile",
		"Cruel",
		"Trashy",
		"Despicable",
		"Embarrassing",
		"Disreputable",
		"Atrocious",
		"Twirling",
		"Orange",
		"Terrifying",
		"Awkward",
	];
	const d = [
		"Mustache",
		"Pickle",
		"Hood Ornament",
		"Raisin",
		"Recycling Bin",
		"Potato",
		"Tomato",
		"House Cat",
		"Teaspoon",
		"Laundry Basket",
	];
	return (
		"The " +
		m[birthday.getMonth()] +
		" " +
		d[Number(birthday.getDate().toString().slice(-1))]
	);
}

console.log("***Results birthdayVillain.js***");
console.log(getVillainName(new Date("April 27, 1975 23:15:30")));
console.log(getVillainName(new Date("February 22, 1975 23:15:30")));
console.log(getVillainName(new Date()));
console.log("\n");
