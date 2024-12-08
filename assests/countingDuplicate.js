/*
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
Example

"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice

URL: https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/javascript
*/
function duplicateCount(text) {
	//loop throught the string to create a map/ object
	const countMap = {};
	let countResult = 0;

	for (char of text.toLowerCase()) {
		//if a countMap[char exist add 1 to it or initate it with 1]
		countMap[char] = countMap[char] + 1 || 1;
	}

	//loop through the object to count duplicates
	for (key in countMap) {
		if (countMap[key] > 1) {
			countResult++;
		}
	}
	return countResult;
}

console.log("***Results countingDuplicate.js***");
console.log(duplicateCount("abcde"), 0);
console.log(duplicateCount("aAbBCCe"), 3);
console.log(duplicateCount("aa111222uuwert"), 4);
console.log(duplicateCount("Indivisibilities"), 2);
console.log("\n");
