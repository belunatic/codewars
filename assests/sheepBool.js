/*
Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).


URL: https://www.codewars.com/kata/54edbc7200b811e956000556/train/javascript
*/

function countSheeps(sheep) {
	let sheepCount = 0;
	sheep.forEach((el) => (el ? sheepCount++ : ""));
	return sheepCount;
}

console.log("***Results numLetters.js***");
console.log(countSheeps([true]), 1);
console.log(
	countSheeps([undefined, null, false, true, true, false, null, undefined]),
	2
);
console.log(countSheeps([null, false]), 0);

console.log("\n");
