var sum_pairs = function(ints, s){
	var memo = {};
	for (var i = 0; i < ints.length; i++) {
		console.log(memo);
		console.log(i);
		var diff = s - ints[i];
		if (memo[diff]) {
			return [diff,ints[i]];
		}
		if (!memo[ints[i]]) {
			memo[ints[i]] = [];
		}
		memo[ints[i]].push(ints[i]);
	}
	return undefined;
};


console.log(sum_pairs([1,4,8,7,3,15],8));
// l1= [1, 4, 8, 7, 3, 15];
// l2= [1, -2, 3, 0, -6, 1];
// l3= [20, -13, 40];
// l4= [1, 2, 3, 4, 1, 0];
// l5= [10, 5, 2, 3, 7, 5];
// l6= [4, -2, 3, 3, 4];
// l7= [0, 2, 0];
// l8= [5, 9, 13, -3];
