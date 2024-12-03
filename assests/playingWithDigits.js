/*

Some numbers have funny properties. For example:

    89 --> 8¹ + 9² = 89 * 1
    695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2
    46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

Given two positive integers n and p, we want to find a positive integer k, if it exists, such that the sum of the digits of n raised to consecutive powers starting from p is equal to k * n.

In other words, writing the consecutive digits of n as a, b, c, d ..., is there an integer k such that :
(ap+bp+1+cp+2+dp+3+...)=n∗k(a^p + b^{p + 1} + c^{p + 2} + d^{p + 3} + ...) = n * k(ap+bp+1+cp+2+dp+3+...)=n∗k

If it is the case we will return k, if not return -1.

Note: n and p will always be strictly positive integers.

https://www.codewars.com/kata/5552101f47fc5178b1000050/train/javascript
*/

function digPow(n, p) {
	//turn the int to a string and then split and store it in the an array
	let numArray = n.toString().split("");
	//let set up the exponential
	let exp = p;
	//set up our sumResult variable
	let sumResult = 0;

	//loop through the array to add up the array
	for (let i = 0; i < numArray.length; i++) {
		sumResult = sumResult + Number(numArray[i]) ** p;
		//increase the exponential by one
		p++;
	}
	//take the result divide with value of argument n
	//if the results are divisible by n and no reminder then we have our k
	//else return -1
	return sumResult % n === 0 ? sumResult / n : -1;
}

console.log("***Results from playingWithDigits.js file***");
console.log(digPow(89, 1), "1");
console.log(digPow(92, 1), "-1");
console.log(digPow(46288, 3), "52");
console.log("\n");
