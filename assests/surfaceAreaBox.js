/*
Write a function that returns the total surface area and volume of a box as an array: [area, volume]

URL: https://www.codewars.com/kata/565f5825379664a26b00007c/train/javascript
*/

function getSize(w, h, d) {
	return [2 * (h * w + w * d + d * h), w * h * d];
}

console.log("***Results surfaceAreaBox.js***");
console.log(getSize(4, 2, 6), [88, 48]);
console.log(getSize(10, 10, 10), [600, 1000]);
console.log("\n");
