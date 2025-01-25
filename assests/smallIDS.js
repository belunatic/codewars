/*
Hey awesome programmer!

You've got much data to manage and of course you use zero-based and non-negative ID's to make each data item unique!

Therefore you need a method, which returns the smallest unused ID for your next new data item...

Note: The given array of used IDs may be unsorted. For test reasons there may be duplicate IDs, but you don't have to find or remove them!

Go on and code some pure awesomeness!

URL: https://www.codewars.com/kata/55eea63119278d571d00006a/train/javascript
*/

function nextId(ids) {
	let result = 0;
	let idNum = 0;
	//sort the array
	ids = ids.sort((a, b) => a - b);
	//loop thru the array
	for (let i = 0; i < ids.length; i++) {
		//check to see if number from 0 to onward are contained in the id array
		if (!ids.includes(idNum)) {
			result = idNum;
			break;
		}
		//see if there is a gap
		//then make that the id
		if (ids[i + 1] - ids[i] >= 2) {
			result = ids[i] + 1;
			break;
		} else {
			//else continue down the line
			idNum++;
			result = ids[i] + 1;
		}
	}
	return result;
}

console.log("***Results smallIDS.js***");
console.log(nextId([0, 1, 2, 3, 5]), 4);
console.log(nextId([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 11);
console.log(nextId([1, 2, 0, 2, 3, 5]), 4);
console.log("\n");
