/*

Accepts a case-insensitive hexadecimal color string as its parameter (ex. "#FF9933" or "#ff9933")
Returns a Map<String, int> with the structure {r: 255, g: 153, b: 51} where r, g, and b range from 0 through 255

Note: your implementation does not need to support the shorthand form of hexadecimal notation (ie "#FFF")

https://www.codewars.com/kata/5282b48bb70058e4c4000fa7/train/javascript
*/

function hexStringToRGB(hexString) {
	//slice the hexString to different parts aand parse them into in base 16
	const r = parseInt(hexString.slice(1, 3), 16);
	const g = parseInt(hexString.slice(3, 5), 16);
	const b = parseInt(hexString.slice(5, 7), 16);

	//map the results
	return { r: r, g: g, b: b };
}

console.log("***Results from convertAHexStringToRGB.js file***");
console.log(hexStringToRGB("#FF9933"), "{r:255, g:153, b:51}");
console.log(hexStringToRGB("#000000"), "{r:0, g:0, b:0}");
console.log(hexStringToRGB("#Fa3456"), "{r:250, g:52, b:86}");
console.log("\n");
