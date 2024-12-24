/*
You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

a can contain numbers or strings. x can be either.

Return true if the array contains the value, false if not.


URL: https://www.codewars.com/kata/57cc975ed542d3148f00015b/train/javascript
*/

function check(a, x) {
	return a.includes(x);
}

console.log("***Results youOnlyNeedOne.js***");
console.log(check([66, 101], 66), true);
console.log(check([101, 45, 75, 105, 99, 107], 108), false);
console.log(check(["t", "e", "s", "t"], "e"), true);
console.log(check(["what", "a", "great", "kata"], "kat"), false);
console.log("\n");
