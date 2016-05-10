// adapted from https://en.wikipedia.org/wiki/Maximum_subarray_problem
// O(n) runtime

function maxSub(arr) {
	var maxEndingHere = 0;
	var maxSoFar = 0;
	for (var i = 0; i < arr.length; i++) {
		maxEndingHere = Math.max(0, maxEndingHere + arr[i]);
		maxSoFar = Math.max(maxSoFar, maxEndingHere);
	}
	return maxSoFar;
}

console.log(maxSub([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6