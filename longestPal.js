// function longestPalindrome(s){
// 	var queue = [s];
// 	var cur;
// 	while (queue.length) {
// 		cur = queue.pop();
// 		if (isPal(cur)) {
// 			return cur.length;
// 		}
// 		if (cur.length > 1) {
// 			queue.unshift(cur.substring(1));
// 			queue.unshift(cur.substring(0,cur.length - 1));
// 		}
// 	}
// }

// function isPal(s) {
// 	if (s === s.split('').reverse().join('')){
// 		return true;
// 	}
// 	return false;
// }

console.log(longestPalindrome('abcvcbakl'));
// console.log(longestPalindrome('qqqqqabcdef1233210123456789876543210'));


//works but way too slow!
// Process was terminated. It took longer than 6000ms to complete
//new angle of attack: find all palindome seeds and then figure out their sizes


function longestPalindrome(s) {
	if (s.length === 1) return 1;
	var pals = [];
	var prev = s[0];
	var prevprev;
	for (var i = 1; i < s.length; i++) {
		if (s[i] === prev) {
			// console.log('even',i);
			pals.push([i-1,i]);
		}
		if (s[i] === prevprev) {
			// console.log('odd',i);
			pals.push([i-2,i]);
		}
		prevprev = prev;
		prev = s[i];
	}
	var lengths = pals.map(function maxPal(pts) {
		// console.log(pts);
		var left = pts[0];
		var right = pts[1];
		while (s[left] === s[right]) {
			left--;
			right++;
		}
		return right - left - 1;
	}
);
	// console.log(lengths);
	return lengths.sort(function(a,b){
		return b-a;
	})[0];
}

//second version work but still too slow!

