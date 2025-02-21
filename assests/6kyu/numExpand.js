/*
You will be given a number and you will need to return it as a string in Expanded Form. For example:

   12 --> "10 + 2"
   45 --> "40 + 5"
70304 --> "70000 + 300 + 4"

NOTE: All numbers will be whole numbers greater than 0.


URL: https://www.codewars.com/kata/5839edaa6754d6fec10000a2/train/javascript
*/

function expandedForm(num) {
	let zero = "";
	let result = [];
	//turn num to string
	let strNum = num.toString();
	//then split it
	//reverse it
	let strNumArr = strNum.split("").reverse();
	//loop throug it adding zero
	for (let i = 0; i < strNumArr.length; i++) {
		if (i === 0 && strNumArr[i] !== "0") {
			result.push(strNumArr[i]);
			zero += "0";
		} else if (strNumArr[i] !== "0") {
			result.push(strNumArr[i] + zero);
			zero += 0;
		} else if (strNumArr[i] === "0") {
			zero += 0;
		}
	}
	//reverse the arr and join it with ' + '
	return result.reverse().join(" + ");
}

console.log("***Results numLetters.js***");
console.log(expandedForm(12), "\t 10 + 2");
console.log(expandedForm(45), "\t 40 + 5");
console.log(expandedForm(70304), "\t 70000 + 300 + 4");
console.log("\n");
