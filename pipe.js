Function.prototype.pipe = function(func) {
	return function(i) {
		return func.call(func,this.call(this,i));
	}.bind(this);
};

console.log([1,2,3].map(addOne.pipe(square))); // [4,9,16]

function addOne(a) {
	return a + 1;
}

function square(a) {
	return a * a;
}