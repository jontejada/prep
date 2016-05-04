/*Given a sorted array of integers, find the starting and ending position of a given target value.
Your algorithm's runtime complexity must be in the order of O(log n).
If the target is not found in the array, return [-1, -1].
For example, Given [5, 7, 7, 8, 8, 10] and target value 8, return [3, 4].
*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
	var found = false;
	var left = 0;
	var right = target.length;
	var mid;
	while(!found) {
		mid = left + Math.floor((right-left)/2);
		if (nums[mid] === target) {
			found = mid;
			break;
		}
		if (nums[mid] > target) {
			right = mid;
			continue;
		}
		if (nums[mid] < target) {
			left = mid;
			continue;
		}

	}
};