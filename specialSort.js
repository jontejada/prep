console.log(specialSort([-1,1,3,-2,2])); //[-1,-2,1,3,2]

function specialSort(arr) {
	var zeroPos = 0;
	var tmp;
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] < 0) {
			if (i > zeroPos) {
				// tmp = arr[i];
				// arr[i] = arr[zeroPos];
				// arr[zeroPos] = tmp;
				arr.splice(zeroPos,0,arr.splice(i,1)[0]);
			}
			zeroPos++;
		}
	}
	return arr;
}