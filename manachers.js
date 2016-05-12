//manachers algo 
// find longest palindromic substring
// O(n) runtime 

function longestPalSubstr(str) {
	var p = [];
	var padded = '$#' + str.split('').join('#') + '#@';
	var c = 0;
	var r = 0;
	for (var i = 1; i < padded.length - 1; i++) {
		p[i] = 0;
		var mir = 2 * c - 1; //?
		if (i < r) {
			p[i] = Math.min(r - i, p[mir]);
		}
		while (padded[i + (1 + p[i])] === padded[i - (1 + p[i])]) {
			p[i]++;
		}
		if (i + p[i] > r) {
			c = i;
			r = i + p[i];
		}
	}
	// var longestAt = p.sort(function(a,b) {
	// 	return b - a; //descending
	// })[0];
	// return 

}