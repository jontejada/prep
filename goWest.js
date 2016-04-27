function dirReduc(arr){
  var n = 'NORTH';
  var s = 'SOUTH';
  var w = 'WEST';
  var e = 'EAST';
  var mods = true;
  while(mods) {
    mods = false;
    for (var i = 0; i < arr.length - 1; i++) {
      if (arr[i] === n && arr[i+1] === s || arr[i] === s && arr[i+1] === n || arr[i] === w && arr[i+1] === e || arr[i] === e && arr[i+1] === w) {
        arr.splice(i,2);
        mods = true;
//         i--;
      }
    }
  }
  return arr;
}