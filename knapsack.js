var knapsack = function(capacity,items){
	var taking = [];
	var index = [];
	for (var i = 0; i < items.length; i++) {
		taking[i] = 0;
		index[i] = i;
	}
	index.sort(function(a,b){
		return items[b][1]/items[b][0] - items[a][1]/items[a][0];
	});
	// var total = 0;
	var space = capacity - 0;
	var cur = 0;
	var isSpace = true;
	while (cur < index.length) {
		var item = items[index[cur]];
		var count = Math.floor(capacity / item[0]);
		taking[index[cur]] = count;
		capacity -= item[0] * count;
// 		console.log(items[index[cur + 1]][0]);
// 		if (capacity < items[index[cur + 1]][0]) {
// 			isSpace = false;
// 		}
		cur++;
	}
	return taking;
};

var ca = 40;
var it = [
			[3,10],
			[9,50],
			[5,20]
		];
console.log(knapsack(ca,it));