// console.log(sum(2,3));   // Outputs 5
// console.log(sum(2)(3));  // Outputs 5

// function sum(x){
// 	if (arguments.length === 2) {
// 		return arguments[0] + arguments[1];
// 	}
// 	return function(y) {
// 		return y + x;
// 	};
// }

// function sum(x,y) {
// 	if (y !== undefined) {
// 		return x + y;
// 	}
// 	return function(y) {
// 		return y + x;
// 	};

// }




function sum(a,b) {
	if (typeof b !== 'undefined') {
		return a + b;
	}
	return function(y) {
		return a + y;
	};
}
console.log(sum(4,5));
console.log(sum(4)(5));




