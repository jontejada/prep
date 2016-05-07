function solution(input, markers){
	var arr = input.split('\n');
	for (var i = 0; i < markers.length; i++) {
		arr = arr.map(function(line) {
			if(line.indexOf(markers[i]) >= 0) {
				return line.split(markers[i])[0].trim();
			}
			return line.trim();
		});
	}
	return arr.join('\n');
}

console.log(solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])); 
//"apples, pears\ngrapes\nbananas"
