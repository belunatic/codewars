/*
A very passive-aggressive co-worker of yours was just fired. While he was gathering his things, he quickly inserted a bug into your system which renamed everything to what looks like jibberish. He left two notes on his desk, one reads: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz" while the other reads: "Uif usjdl up uijt lbub jt tjnqmf kvtu sfqmbdf fwfsz mfuufs xjui uif mfuufs uibu dpnft cfgpsf ju".

Rather than spending hours trying to find the bug itself, you decide to try and decode it.

If the input is not a string, your function must return "Input is not a string". Your function must be able to handle capital and lower case letters. You will not need to worry about punctuation.

URL: https://www.codewars.com/kata/56419475931903e9d1000087/train/javascript
*/

function oneDown(str) {
	let alp = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
	const map = {};
	let result = "";

	if (typeof str !== "string") {
		return "Input is not a string";
	}

	alp.split("").forEach((letter, i, arr) => {
		if (letter === "A") {
			return (map[letter] = "z");
		} else {
			map[letter] = arr[i - 1];
		}
	});

	for (letter of str) {
		map[letter] ? (result += map[letter]) : (result += letter);
	}
	return result;
}

console.log("***Results firedWorker.js***");
console.log(oneDown("Ifmmp"), "\tHello");
console.log(
	oneDown("Uif usjdl up uijt lbub jt tjnqmf"),
	"\tThe trick to this kata is simple"
);
console.log(oneDown(45), "\tInput is not a string");
console.log("\n");
