/*
How can you tell an extrovert from an introvert at NSA?
Va gur ryringbef, gur rkgebireg ybbxf ng gur BGURE thl'f fubrf.

I found this joke on USENET, but the punchline is scrambled. Maybe you can decipher it?
According to Wikipedia, ROT13 is frequently used to obfuscate jokes on USENET.

For this task you're only supposed to substitute characters. Not spaces, punctuation, numbers, etc.

URL: https://www.codewars.com/kata/52223df9e8f98c7aa7000062/train/javascript
*/

function rot13(str) {
	// get the letters and rot13
	let originalLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
	let rot13Letters = "NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm";
	//map
	let mapROT13 = {};
	//results
	let results = "";
	//creating the mapping
	for (let i = 0; i < originalLetters.length; i++) {
		mapROT13[originalLetters[i]] = rot13Letters[i];
	}

	for (const letter of str) {
		//     check to see if mapping exist or else retun the original letter
		if (mapROT13[letter]) {
			results += mapROT13[letter];
		} else results += letter;
	}

	console.log("orginal string: ", str, ", resulting string: ", results);
	return results;
}

console.log("These are results from rot13.js file");
rot13("EBG13 rknzcyr.");
rot13("This is my first ROT13 excercise!");
