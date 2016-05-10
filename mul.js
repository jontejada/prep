function mul(x) {
	return function(y){
		return x * y;
	};
}
console.log(mul(2)(4));
// console.log(mul(2)(4)(3));