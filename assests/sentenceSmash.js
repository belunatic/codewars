/*
Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!


URL: https://www.codewars.com/kata/53dc23c68a0c93699800041d/train/javascript
*/

function smash(words) {
	return words.join(" ");
}

console.log("***Results senteceSmash.js***");
console.log(
	smash(["hello", "world", "this", "is", "great"]),
	"hello world this is great"
);
console.log("\n");
