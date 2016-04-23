//merge helper function
function merge(l,r) {
	var out = [];
	var il = 0;
	var ir = 0;
	while (il < l.length && ir < r.length) {
		if (l[il] < r[ir]) {
			out.push(l[il++]);
		} else {
			out.push(r[ir++]);
		}
	}
	return out.concat(l.slice(il)).concat(r.slice(ir));
}
//main recursive function
function mergeSort(items){
	if (items.length < 2) return items;
	var mid = Math.floor(items.length/2);
	var left = items.slice(0,mid);
	var right = items.slice(mid);
	return merge(mergeSort(left),mergeSort(right));
}

console.log(mergeSort([4,2,6,7,9,1,0,3,5,8]));