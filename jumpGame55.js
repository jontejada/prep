// Given an array of non-negative integers, you are initially positioned at the first index of the array.
// Each element in the array represents your maximum jump length at that position.
// Determine if you are able to reach the last index.
// For example:
// A = [2,3,1,1,4], return true.
// A = [3,2,1,0,4], return false.

/**
 * @param {number[]} nums
 * @return {boolean}
 */
// var canJump = function(nums) {
// 	// var can = true;

// 	// var prev = -1;
// 	var cur = 0;
// 	var dest = nums.length - 1;
// 	var max;
// 	while (nums[cur] !== 0 && cur < dest) {
// 		max = 0;
// 		cur = max;
// 	}
// 	return dest >= cur ? true : false;

// 	// while (can) {
// 	// 	if(i = nums.length)
// 	// 	i += nums[i];
// 	// }  
// 	// while (nums[i] > 0 && nums[i] < )
// };



// var canJump = function (arr) {
// 	var destI = arr.length - 1;
// 	var curI = 0;
// 	while (curI <= destI && arr[curI] !== 0) {
// 		var sub = arr.slice(curI,curI + arr[curI]);
// 		curI += Math.max(...sub);
// 	}
// 	return curI >= destI ? true : false;
// }

// console.log(canJump([1,1,2,2,0,1,1]));

// var arr = [1,2,3];
// console.log(Math.max(...arr));



// var canJump = function (nums) {
// 	var destI = nums.length - 1;
// 	var curI = 0;
// 	while (curI <= destI && curI !== 0) {
// 		var max = 0;
// 		for (var i = 1; i < nums[curI]; i++) {
// 			if (nums[curI + i] > max) {
// 				max = i;
// 			}
// 		}
// 		curI += i; 
// 	}
// 	return curI >= destI ? true : false;
// };

// console.log(canJump([1,1,2,2,0,1,1])); //true




// var canJump = function (nums) {
// 	var destI = nums.length - 1;
// 	var curI = 0;
// 	// var c = 0;
// 	while (curI < destI && nums[curI] !== 0) {
// 		// c++;
// 		var max = 0;
// 		for (var i = 1; i <= nums[curI]; i++) {
// 			if (nums[curI + i] > max) {
// 				max = i;
// 			}
// 		}
// 		curI += max; 
// 	}
// 	return curI >= destI ? true : false;
// };

// console.log(canJump([1,1,2,2,0,1,1])); //true



var canJump = function (nums) {
	if (nums.length === 1) return true;
	var max = nums[0];
	for (var i = 0; i < nums.length; i++) {
		if (max <= i && nums[i] === 0) {
			return false;
		}
		if (i + nums[i] > max) {
			max = i + nums[i];
		}
		if (max >= nums.length - 1) {
			return true;
		}
	}
	return false;
};




