/*
There was a test in your class and you passed it. Congratulations!

But you're an ambitious person. You want to know if you're better than the average student in your class.

You receive an array with your peers' test scores. Now calculate the average and compare your score!

Return true if you're better, else false!

URL: https://www.codewars.com/kata/5601409514fc93442500010b/train/javascript
*/

function betterThanAverage(classPoints, yourPoints) {
	let aveScore =
		classPoints.reduce((point, acc) => point + acc, 0) / classPoints.length;
	return yourPoints > aveScore ? true : false;
}

console.log("***Results testScoreAverage.js***");
console.log(betterThanAverage([2, 3], 5), true);
console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75), true);
console.log(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9), false);
console.log("\n");
