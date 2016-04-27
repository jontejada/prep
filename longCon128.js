// Given an unsorted array of integers, find the length of the longest consecutive elements sequence.

// For example,
// Given [100, 4, 200, 1, 3, 2],
// The longest consecutive elements sequence is [1, 2, 3, 4]. Return its length: 4.

// Your algorithm should run in O(n) complexity.


/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
	var hash = {};
	nums.forEach(function(num) {
		hash[num] = true;
	});
	var max = 1;
	var cur;
	var left;
	var right;
	for (var i = 0; i < nums.length; i++) {
		cur = 1;
		left = nums[i] - 1;
		right = nums[i] + 1; 
		while (hash[left]) {
			// console.log('w1',i);
			cur++;
			delete hash[left];
			left--;
		}
		while (hash[right]) {
			// console.log('w2',i);
			cur++;
			delete hash[right];
			right++;
		}
		// console.log(i,nums[i],max,cur);
		max = Math.max(max,cur);
	}
	return max;
};

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));