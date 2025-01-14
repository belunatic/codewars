/*
Create a function longer that accepts a string and sorts the words in it based on their respective lengths in an ascending order. If there are two words of the same lengths, sort them alphabetically. Look at the examples below for more details.

longer("Another Green World") => Green World Another
longer("Darkness on the edge of Town") => of on the Town edge Darkness
longer("Have you ever Seen the Rain") => the you Have Rain Seen ever

Inputs will contain only Latin characters and spaces. Lowercase characters are to be sorted before uppercase ones as follows:

longer("hello Hello") => Hello hello


URL: https://www.codewars.com/kata/5963314a51c68a26600000ae/train/javascript
*/

function longer(s) {
	// split the string
	let arr = s.split(" ");
	//sort the string
	let sortArr = arr.sort((a, b) => {
		//if two string are smae in length
		//loop through them to determine which one goes first
		//Capitalize string go first
		if (a.length === b.length) {
			for (let i = 0; i < a.length; i++) {
				//if the charCodeAt the given index do not much sort them
				//otherwise do nothing
				if (a.charCodeAt(i) !== b.charCodeAt(i)) {
					return a.charCodeAt(i) - b.charCodeAt(i);
					break;
				}
			}
		}
		//else if string length do not match perform the normal sort
		else {
			return a.length - b.length;
		}
	});
	//join the sortArr and return it
	return sortArr.join(" ");
}

console.log("***Results reversedSequence.js***");
console.log(longer("Another Green World"), "\tGreen World Another");
console.log(longer("alpha Beta"), "\tBeta alpha");
console.log(
	longer("Have you ever Seen the Rain"),
	"\tthe you Have Rain Seen ever"
);
console.log(longer("This will be our Year"), "\tbe our This Year will");
console.log("\n");
