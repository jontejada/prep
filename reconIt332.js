/*
Example 1:
tickets = [["MUC", "LHR"], ["JFK", "MUC"], ["SFO", "SJC"], ["LHR", "SFO"]]
Return ["JFK", "MUC", "LHR", "SFO", "SJC"].
Example 2:
tickets = [["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]
Return ["JFK","ATL","JFK","SFO","ATL","SFO"].
Another possible reconstruction is ["JFK","SFO","ATL","JFK","ATL","SFO"]. But it is larger in lexical order.
*/

/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
// var findItinerary = function(tkts) {
// 	var out = ['JFK'];
// 	var total = tkts.length + 1;
// 	while (out.length < total) {
// 		var next = 
// 	}
// };

var findItinerary = function(tkts) {
	var targets = {};
	// need to sort tkts by dest ascending
	tkts.sort(function(a,b) {
		if (a[1] > b[1]) return -1;
		return 1;
	});
	for (var i = 0; i < tkts.length; i++) {
		if (!targets[tkts[i][0]]) {
			targets[tkts[i][0]] = [];
		}
		targets[tkts[i][0]].push(tkts[i][1]);
	}
	var route = [];

	//iterative version
	// var stack = ['JFK'];
	// var count = 1;
	// while (stack.length && count < 20) {
	// 	count++;
	// 	while(targets[stack[stack.length - 1]] && targets[stack[stack.length - 1]].length > 0) {
	// 		stack.push(targets[stack[stack.length - 1]].pop());
	// 	}
	// 	route.push(stack.pop());
	// }
	//end iterative version

	//recursive version
	function visit(airport) {
		while(targets[airport] && targets[airport].length > 0) {
			visit(targets[airport].pop());
		}
		route.push(airport);
	}
	visit('JFK');
	//end recursive version

	return route.reverse();
};


//ex 1
// console.log(findItinerary([["MUC","LHR"],["JFK","MUC"],["SFO","SJC"],["LHR","SFO"]]));
//["JFK","MUC","LHR","SFO","SJC"]


//ex 2
console.log(findItinerary([["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]));
//return ["JFK","ATL","JFK","SFO","ATL","SFO"].
//not any other like ["JFK","SFO","ATL","JFK","ATL","SFO"] because larger in lexical order!






