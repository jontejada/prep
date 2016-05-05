/**
 * @param {number} n
 * @return {number}
 */

var memo = {};
var fib = function(n) {
	if (n < 2) return n;
	if (memo[n]) return memo[n];
	memo[n] = fib(n - 1) + fib(n - 2);
	return memo[n];
};

function climbStairs(n){
	return fib(n+1);
}

console.log(climbStairs(5));//8
console.log(climbStairs(6));//13
console.log(climbStairs(7));//21