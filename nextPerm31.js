/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
	var shifted = false;
	var cur = nums.length - 1;
	while (!shifted && cur > 0) {
		if (nums[cur] > nums[cur - 1]) {
			var temp = nums[cur];
			nums[cur] = nums[cur - 1];
			nums[cur - 1] = temp;
			shifted = true;
		}
		cur--;
	}
	if (!shifted && cur === 1) {
		nums.sort(function(a,b){
			return a - b;
		});
	}
};


//does not handle [1,3,2] --> [2,1,3]
//incorectly does [3,1,2]