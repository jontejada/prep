/**
Given a range [m, n] where 0 <= m <= n <= 2147483647, return the bitwise AND of all numbers in this range, inclusive.
For example, given the range [5, 7], you should return 4.
 * @param {number} m
 * @param {number} n
 * @return {number}
//  */
// var rangeBitwiseAnd = function(m, n) {
// 	if (m === n) {
// 		return n;
// 	}
// 	var exp = Math.floor(Math.log(m)/Math.log(2));
// 	if (n >= Math.pow(2,exp + 1)) {
// 		return 0;
// 	} 
// 	if (m >= Math.pow(2,exp) + Math.pow(2,exp - 1)) {
// 		return Math.pow(2,exp) + Math.pow(2,exp - 1);
// 	}
// 	return Math.pow(2,exp);
// };



var rangeBitwiseAnd = function(m, n) {
	while (n > m) {
		n = n & (n - 1);
	}
	return n;
};
console.log(rangeBitwiseAnd(10,11));
