// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143 ?

function largestPF(num) {
	var cur = 4;
	while(cur < num) {
		for (var i = 2; i < cur; i++) {
			if (cur%i !== 0 && num%cur === 0) {
				console.log('i',i);
				console.log('cur',cur);
				return num/cur;
			}
		}
		cur++;
	}
}

// console.log(largestPF(600851475143));
console.log(largestPF(13195));

//377*35