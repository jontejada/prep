function PriorityQueue() {
	this._nodes = [];

	this.enqueue = function(priority, key) {
		this._nodes.push({key:key, priority: priority});
		this.sort();
	};

	this.dequeue = function() {
		return this._nodes.shift().key; //throw away priority
	};

	this.sort = function() {
		this._nodes.sort(function(a, b) {
			return a.priority - b.priority;
		});
	};

	this.isEmpty = function() {
		return !this._nodes.length;
	};
}

function Graph() {
	var inf = 1/0;
	this.verticies = {};

	this.addVertex = function(name, edges) {
		this.verticies[name] = edges;
	};

	this.shortestPath = function(start, finish) {
		var nodes = new PriorityQueue();
		var distances = {};
		var previous = {};
		var path = [];
		var smallest; 
		var vertex;
		var neighbor;
		var alt;
		for (vertex in this.verticies) {
			if (vertex === start) {
				distances[vertex] = 0;
				nodes.enqueue(0, vertex);
			} else {
				ditances[vertex] = inf;
				nodes.enqueue(inf, vertex);
			}
			previous[vertex] = null;
		}

	};
}







