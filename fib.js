//fibonacci number generator
// sequence starts with 1 1.
//add prev 2 for next: 1,1,2,3,5,8,13,21,34,55...
//               nth = 0,1,2,3,4,5,6 , 7, 8, 9...
// 


// function fib(n) {
// 	if (n < 2) {
// 		return 1;
// 	}
// 	return fib(n - 2) + fib(n - 1);
// }
// console.log(fib(40));





// var fibonacci = function(n) {
//     if(n==0 || n == 1)
//         return n;
//     return fibonacci(n-1) + fibonacci(n-2);
// }




// var fibonacci = (function(){
// 	var memo = {};
// 	function f(n){
// 		var value;
// 		if (n in memo) {
// 			value = memo[n];
// 		} else if (n < 2) {
// 			value = n;
// 		} else {
// 			value = f(n - 2) + f(n - 1);
// 			memo[n] = value;
// 		}
// 		return value;
// 	}
// 	return f;
// })();

var fibonacci = (function(){
	var memo = {};
	function f(n) {
		var value;
		if (memo[n]) {
			value = memo[n];
		} else {
			if (n < 2) value = n;
			else {
				value = f(n - 2) + f(n - 1);
				memo[n] = value;
			}
		}
		return value;
	}
	return f;
})();



console.log(fibonacci(12));
console.log(fibonacci(15));









// var memo = {};
// function fib(n) {
// 	var val;
// 	if (memo[n]) return memo[n];
// 	else if (n < 2) return 1;
// 	memo[n] = fib(n - 2) + fib(n - 1);
// 	return memo[n];
// }
// console.log(fib(9));



var iife = (function(){
	var memo = {};
	function fib(n) {
		var val;
		if (memo[n]) val = memo[n];
		else if (n < 2) val = 1;
		else val = fib(n - 2) + fib(n - 1);
		return val;
	}
	return fib;
})();
console.log(iife(20));
