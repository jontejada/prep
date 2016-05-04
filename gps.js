var roads = [
    {from: 0, to: 1, drivingTime: 5},
    {from: 0, to: 2, drivingTime: 10},
    {from: 1, to: 2, drivingTime: 10},
    {from: 1, to: 3, drivingTime: 2},
    {from: 2, to: 3, drivingTime: 2},
    {from: 2, to: 4, drivingTime: 5},
    {from: 3, to: 2, drivingTime: 2},
    {from: 3, to: 4, drivingTime: 10}
];
console.log(navigate(5, roads, 0, 4)); 
// should return [0, 1, 3, 2, 4]. Fastest time is 5 + 2 + 2 + 5 = 14 minutes


// complete the function so that it returns the fastest route 
function navigate(numberOfIntersections, roads, start, finish) {
	var g = new Graph();
	var road;
	for (var i = 0; i < roads.length; i++) {
		road = roads[i];
		g.addRoad(road.from,road.to,road.drivingTime);
	}
	g.shortestPath(start,finish);
}

function PriQue() {
	this.nodes = [];
	this.enqueue = function(priority, key) {
		this.nodes.push({key:key, priority: priority});
		this.sort();
	};
	this.dequeue = function() {
		return this.nodes.shift().key;
	};
	this.sort = function() {
		this.nodes.sort(function(a,b){
			return a.priority - b.priority;
		});
	};
	this.isEmpty = function() {
		return !this.nodes.length;
	};
}

function Graph() {
	this.verticies = {};
	this.addRoad = function(from, to, priority) {
		if(!this.verticies[from]){
			this.verticies[from] = {};
		}
		this.verticies[from][to] = priority;
	};
	this.shortestPath = function(start,finish) {
		var nodes = new PriQue();
		var distances = {};
		var previous = {};
		var path = [];
		var smallest;
		var vertex;
		var neighbor;
		var alt;
		for (vertex in this.verticies) {
			if (vertex === start.toString()) {
				distances[vertex] = 0;
				nodes.enqueue(0,vertex);
			} else {
				distances[vertex] = Infinity;
				nodes.enqueue(Infinity,vertex);
			}
			previous[vertex] = null;
		}
		while(!nodes.isEmpty()) {
			smallest = nodes.dequeue();
			if (smallest === finish.toString()) {
				while(previous[smallest]) {
					path.push(smallest);
					smallest = previous[smallest];
				}
				break;
			}
			if(!smallest || distances[smallest] === Infinity) {
				continue;
			}
			for (neighbor in this.verticies[smallest]) {
				alt = distances[smallest] + this.verticies[smallest][neighbor];
				if (alt < distances[neighbor]) {
					distances[neighbor] = alt;
					previous[neighbor] = smallest;
					nodes.enqueue(alt,neighbor);
				}
			}
		}
		return path;
	};

}















