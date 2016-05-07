/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
	var hash = {};
	for (var i = 0; i < nums.length; i++) {
		if (nums[i] > 0) {
			hash[nums[i]] = true;
		}
	}
	var pos = 1;
	while (hash[pos]) {
		pos++;
	}
	return pos;
};

console.log(firstMissingPositive([3,4,-1,1])); // 2