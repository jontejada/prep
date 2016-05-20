// Given two arrays, write a function to compute their intersection.

// Example:
var nums1 = [1, 2, 2, 1];
var nums2 = [2, 2];

// Note:
// Each element in the result must be unique.
// The result can be in any order.
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(n1, n2) {
	var hash = {};
	var out = [];
	for (var i = 0; i < n1.length; i++) {
		hash[n1[i]] = true;
	}
	for (var j = 0; j < n2.length; j++) {
		if (hash[n2[j]]) {
			out.push(n2[j]);
			delete hash[n2[j]];
		}
	}
	return out;
};

console.log(intersection(nums1,nums2)); // return [2].

