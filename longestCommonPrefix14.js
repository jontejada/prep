/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
	var sub = strs[0] || '';
	for (var i = 1; i < strs.length; i++) {
		while(strs[i].indexOf(sub) !==0 ) { //sub.length > 0 && 
			sub = sub.slice(0, -1);
		}
	}
	return sub;
};