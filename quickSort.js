function quickSort(arr) {
	if (arr.length < 1 ) return [];
	var left = [];
	var right = [];
	var pivot = arr[0]; // just picking first
	for (var i = 1; i < arr.length; i++) {
		if (arr[i] < pivot) {
			left.push(arr[i]);
		} else {
			right.push(arr[i]);
		}
	}
	return quickSort(left).concat(pivot,quickSort(right));
}
console.log(quickSort([6,4,7,9,1,8,0,2,3,5]));