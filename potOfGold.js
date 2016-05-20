function playPot(arr, start, end) {
	if (start > end) {
		return 0;
	}
	start = start || 0;
	end = end || arr.length - 1;
	var left = arr[start] + Math.min(playPot(arr,start + 2, end), playPot(arr,start + 1, end - 1));
	var right = arr[end] + Math.min(playPot(arr,start, end - 2), playPot(arr,start + 1, end - 1));
	//return higest possible score
	return Math.max(left,right);
}

// console.log(playPot([2,5,7,9,3,10,1,9,8,1]));
console.log(playPot([2,5,7,9,3,10,9,8,1]));