/*
The count-and-say sequence is the sequence of integers beginning as follows:
1, 11, 21, 1211, 111221, ...
1 is read off as "one 1" or 11.
11 is read off as "two 1s" or 21.
21 is read off as "one 2, then one 1" or 1211.
Given an integer n, generate the nth sequence.
Note: The sequence of integers will be represented as a string
*/

/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
	var cur = '1';
	var prev;
	var count;
	var say;
	for (var i = 1; i < n; i++) {
		prev = cur;
		cur = '';
		count = 1;
		say = prev[0];
		for (var j = 1; j < prev.length; j++) {
			if(prev[j] !== say) {
				cur += count + say;
				count = 1;
				say = prev[j];
			}
			else count++;
		}
		cur += count + say;
	}
	return cur;
};

// console.log(countAndSay(process.argv[2]));





















