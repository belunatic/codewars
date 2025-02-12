/*
Codewars Bar recommends you drink 1 glass of water per standard drink so you're not hungover tomorrow morning.

Your fellow coders have bought you several drinks tonight in the form of a string. Return a string suggesting how many glasses of water you should drink to not be hungover.
Examples

"1 beer"  -->  "1 glass of water"
because you drank one standard drink

"1 shot, 5 beers, 2 shots, 1 glass of wine, 1 beer"  -->  "10 glasses of water"
because you drank ten standard drinks


URL: https://www.codewars.com/kata/5aee86c5783bb432cd000018/train/javascript
*/

function hydrate(s) {
	let x = "1234567890";
	let numbers = s.split("").filter((el) => x.includes(el));
	let water = numbers.reduce((val, acc) => +acc + +val, 0);
	return water > 1 ? water + " glasses of water" : water + " glass of water";
}

console.log("***Results drinkingWater.js***");
console.log(hydrate("1 beer"), "1 glass of water");
console.log(
	hydrate("1 shot, 5 beers, 2 shots, 1 glass of wine, 1 beer"),
	"10 glasses of water"
);
console.log(hydrate("2 glasses of wine and 1 shot"), "3 glasses of water");
console.log("\n");
