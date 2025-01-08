/*
Create a function that gives a personalized greeting. This function takes two parameters: name and owner. 

URL: https://www.codewars.com/kata/5772da22b89313a4d50012f7/train/javascript
*/

function greet(name, owner) {
	return name === owner ? "Hello boss" : "Hello guest";
}

console.log("***Results bossguest.js***");
console.log(greet("Daniel", "Daniel"), "Hello boss");
console.log(greet("Greg", "Daniel"), "Hello guest");
console.log("\n");
