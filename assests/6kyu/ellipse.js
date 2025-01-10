/*
Based on the received dimensions, a and b, of an ellipse, calculare its area and perimeter.

URL: https://www.codewars.com/kata/5830e7feff1a3ce8d4000062/train/javascript
*/

function elipse(a, b) {
	const area = Math.PI * a * b;
	const per = Math.PI * ((3 / 2) * (a + b) - Math.sqrt(a * b));
	return `Area: ${area.toFixed(1)}, perimeter: ${per.toFixed(1)}`;
}

console.log("***Results ellipse.js***");
console.log(elipse(5, 2), "Area: 31.4, perimeter: 23.1");
console.log("\n");
