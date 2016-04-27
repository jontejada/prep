// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

// 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20
// 20 covers 1 2 4 5 10
// 19 
// 18 covers 2 9 3 6
// 17
// 16 covers 8 2 4
// 15 covers 5 3
// 14 covers 2 7 
// 13
// 12
// 11

var x = 1;
while (true) {
	if (x%20 === 0 &&
		x%19 === 0 &&
		x%18 === 0 &&
		x%17 === 0 &&
		x%16 === 0 &&
		x%15 === 0 &&
		x%14 === 0 &&
		x%13 === 0 &&
		x%12 === 0 &&
		x%11 === 0
		) {
		break;
	}
	x++;
	// if (x%1000 === 0) console.log(x);
}
console.log(x);