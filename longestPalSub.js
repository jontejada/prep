function helper(str,start,end) {
	while (start >= 0 && end <= str.length - 1 && s[start] === s[end]) {
		begin--;
		end++;
	}
	return s.substring(begin + 1, end);
}
function longPal(s) {
	if (!s.length) return 0;
	if (s.length === 1) return 1;
	var long = s.substring(0,1);
	var tmp;
	for (var i = 0; i < s.length; i++) {
		tmp = helper(s,i,i);
		if (tmp.length > long.length) long = tmp;
		tmp = helper(s,i,i+1);
		if (tmp.length > long.length) long = tmp;		
	}
	return long.length;
}


/*
http://articles.leetcode.com/longest-palindromic-substring-part-ii
http://www.programcreek.com/2013/12/leetcode-solution-of-longest-palindromic-substring-java/
https://en.wikipedia.org/wiki/Longest_palindromic_substring
http://articles.leetcode.com/longest-palindromic-substring-part-ii

*/