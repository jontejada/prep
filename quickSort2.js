function quickSort(arr) {
	//base
	if (arr.length < 1) return [];

	//build recursive
	var piv = arr[0];
	var left = [];
	var right = [];
	for (var i = 1; i < arr.length; i++) {
		if (arr[i] < piv) {
			left.push(arr[i]);
		} else {
			right.push(arr[i]);
		}
	}
	//recurse
	return quickSort(left).concat(piv,quickSort(right));
}

console.log(quickSort([3,4,7,2,1,9,0,5,8,6]));