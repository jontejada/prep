/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
	var total = nums.length;
	for (var i = 0; i < total; i++) {
		if (nums[i] === 2) {
			nums.splice(i,1);
			nums.push(2);
			total--;
			i--;
			continue;
		}
		if (nums[i] === 0) {
			nums.splice(i,1);
			nums.unshift(0);
		}
	}  
};