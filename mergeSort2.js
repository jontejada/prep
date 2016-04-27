function merge(left,right) {
	var iLeft = 0;
	var iRight = 0;
	var out = [];
	while (iLeft < left.length && iRight < right.length) {
		if (left[iLeft] < right[iRight]) {
			out.push(left[iLeft]);
			iLeft++;
		} else {
			out.push(right[iRight]);
			iRight++;
		}
	}
	// return out.concat(left.slice(iLeft).concat(right.slice(iRight)));
	return out.concat(left.slice(iLeft)).concat(right.slice(iRight)); //either this or above works
}

function mergeSort(arr) {
	// base case
	if (arr.length < 2) return arr;
	
	// build recursive
	var mid = Math.floor(arr.length / 2);
	var left = arr.slice(0,mid);
	var right = arr.slice(mid);
	//recurse
	return merge(mergeSort(left),mergeSort(right));
}

console.log(mergeSort([3,4,7,2,1,9,0,5,8,6]));