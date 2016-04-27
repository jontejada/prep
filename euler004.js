// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two 3-digit numbers.

function isPal(num){
	var str = num.toString();
	if (str === str.split('').reverse().join('')) {
		return true;
	}
	return false;
}

// console.log(isPal(23));
// console.log(isPal(232));

// function findLar(digits) {
// 	var start = Math.pow(10,digits) - 1;
// 	while (start.toString().length === digits) { //could just be true
// 		console.log(start, isPal(start*start), start*start);
// 		if (isPal(start * start)) {
// 			console.log(start);
// 			return start*start;
// 		}
// 		start--;
// 	}
// }

function findLar(){
	var max = 100001; //smallest pal
	var p;
	for (var i = 999; i >= 100; i--) {
		if (max >= i * 999) break;
		for (var j = 999; j >= i; j--) {
			p = i * j;
			if (p > max && isPal(p)) {
				max = p;
			}
		}
	}
	return max;
}


console.log(findLar());