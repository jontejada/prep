/*
s1 = "my&friend&Paul has heavy hats! &"
s2 = "my friend John has many many friends &"
mix(s1, s2) --> "2:nnnnn/1:aaaa/1:hhh/2:mmm/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss"

s1 = "mmmmm m nnnnn y&friend&Paul has heavy hats! &"
s2 = "my frie n d Joh n has ma n y ma n y frie n ds n&"
mix(s1, s2) --> "1:mmmmmm/=:nnnnnn/1:aaaa/1:hhh/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss"

s1="Are the kids at home? aaaaa fffff"
s2="Yes they are here! aaaaa fffff"
mix(s1, s2) --> "=:aaaaaa/2:eeeee/=:fffff/1:tt/2:rr/=:hh"
*/

var s1="Are the kids at home? aaaaa fffff";
var s2="Yes they are here! aaaaa fffff";

console.log(mix(s1,s2));

function mix(s1, s2) {
	var hash1 = {};
	var hash2 = {};
	for (var i = 0; i < s1.length; i++) {
		if (s1.charCodeAt(i) > 96 && s1.charCodeAt(i) < 123) {
			if(!hash1[s1[i]]) {
				hash1[s1[i]] = 1;
			} else {
				hash1[s1[i]]++;
			}
		}
	}
	for (var j = 0; j < s2.length; j++) {
		if (s2.charCodeAt(j) > 96 && s2.charCodeAt(j) < 123) {
			if(!hash2[s2[j]]) {
				hash2[s2[j]] = 1;
			} else {
				hash2[s2[j]]++;
			}
		}

	}
	var outArr = [];
	for (var letter in hash1) {
		var str;
		if (hash2[letter] && hash1[letter] && hash2[letter] > 1 || hash1[letter] > 1) {
			//in both!
			if (hash1[letter] > hash2[letter]) {
				str = '1:';
				for (var k = 0; k < hash1[letter]; k++) {
					str += letter;
				}
			} else if (hash1[letter] < hash2[letter]) {
				str = '2:';
				for (var k = 0; k < hash2[letter]; k++) {
					str += letter;
				}
			} else {
				str = '=:';
				for (var k = 0; k < hash1[letter]; k++) {
					str += letter;
				}
			}
			outArr.push(str);
		}
	}
	outArr.sort(function(a,b) {
	    if (a.length > b.length) return -1;
	    if (a.length < b.length) return 1;
	    if (a.length === b.length) {
	       if (a > b) {
	           return 1;
           }
	       if (a < b) {
		      return -1;
		   }
	    }
	});

	return outArr.join('/');
}






