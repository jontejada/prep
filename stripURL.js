// console.log(stripUrlParams('www.codewars.com?a=1&b=2&a=2')); // returns 'www.codewars.com?a=1&b=2'
// console.log(stripUrlParams('www.codewars.com?a=1&b=2&a=2', ['b'])); // returns 'www.codewars.com?a=1'
console.log(stripUrlParams('www.codewars.com', ['b'])); // returns 'www.codewars.com'

function stripUrlParams(url, paramsToStrip){
	var broken = url.split('?');
	if (!broken[1]) {
		return url;
	}
	var query = broken[1].split('&');
	var hash = {};
	for (var i = 0; i < query.length; i++ ) {
		var spl = query[i].split('=');
		if (!hash[spl[0]]) {
			hash[spl[0]] = spl[1];
		}
	}
	if (paramsToStrip) {
		for (var j = 0; j < paramsToStrip.length; j++) {
			delete hash[paramsToStrip[j]];
		}
	}
	var out = broken[0] + '?';
	var qs = 0;
	for (var q in hash) {
		if (qs > 0) {
			out+= '&';
		}
		out += q + '=' + hash[q];
		qs++;
	}
	return out;
}