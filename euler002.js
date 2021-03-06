// Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

// By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

function addEvens(max) {
	var total = 0;
	var first = 1;
	var second = 2;
	var temp;
	while (second <= max) {
		if (second%2 === 0) {
			total +=second;
		}
		temp = second;
		second += first;
		first = temp;
	}
	return total;
}

console.log(addEvens(4000000));