/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    var max = nums.length;
    for (var i = 0; i < max; i++) {
        if (!nums[i]) {
            nums.push(nums.splice(i,1)[0]);
            i--;
            max--;
        }
    }
    return nums;
};

console.log(moveZeroes([0,0,1]));