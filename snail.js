snail = function(arr) {
  if (arr.length === 1) return arr[0]; //codewars specific
  if (arr.length === 0) return [];
  var n = arr.length;
  var out = [];
  for (var i = 0; i < n; i++) {
    out.push(arr[0][i]);
  }
  for (var j = 1; j < n; j++) {
    out.push(arr[j][n - 1]);
  }
  for (var k = n - 2; k >= 0; k--) {
    out.push(arr[n - 1][k]);
  }
  for (var l = n - 2; l > 0; l--) {
    out.push(arr[l][0]);
  }
  var inner = [];
  for (var m = 1; m < n - 1; m++) {
    inner.push(arr[m].splice(1,n-2));
  }
  return out.concat(snail(inner));
};

console.log(snail([[1,2,3],[8,9,4],[7,6,5]]));