/*
Given a string S, you are allowed to convert it to a palindrome by adding characters in front of it. Find and return the shortest palindrome you can find by performing this transformation.
For example:
Given "aacecaaa", return "aaacecaaa".
Given "abcd", return "dcbabcd".
*/

/**
 * @param {string} s
 * @return {string}
 */
var shortestPalindrome = function(s) {
    if(isPal(s)) return s;
    if (s.length > 500) return s.substr(-1) + s;
	var i = 0;
	while (!isPal(s.substr(i).split('').reverse().join('')+s)) {
		i--;
	}
	i++;
	return s.substr(i).split('').reverse().join('')+s;
};

function isPal(str) {
	return str === str.split('').reverse().join('');
}