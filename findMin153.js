/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    // var prev = nums[0];
    for (var i = 1; i < nums.length; i++) {
        if (nums[i] - nums[i-1] < 0 ) return nums[i];
    }
    return nums[0];
};