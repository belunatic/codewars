/*
Create a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or lower case "r", you are playing banjo!

URL: https://www.codewars.com/kata/53af2b8861023f1d88000832/train/javascript
*/

function areYouPlayingBanjo(name) {
	return name[0].toLowerCase() === "r"
		? `${name} plays banjo`
		: `${name} does not play banjo`;
}

console.log("***Results banjoPlaying.js***");
console.log(areYouPlayingBanjo("Adam"), "Adam does not play banjo");
console.log(areYouPlayingBanjo("Paul"), "Paul does not play banjo");
console.log(areYouPlayingBanjo("Ringo"), "Ringo plays banjo");
console.log(areYouPlayingBanjo("rolf"), "rolf plays banjo");
console.log("\n");
