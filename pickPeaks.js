function pickPeaks(arr){
  var out = {
    pos:[],
    peaks:[]
  };
  arr.forEach(function (cur,i,arr) {
    if (cur > arr[i-1] && cur > arr[i+1]) {
      out.pos.push(i);
      out.peaks.push(arr[i]);
    }
    if (cur > arr[i-1] && cur === arr[i+1]) {
      console.log('pp',i);
      var pos = i+1;
      while (pos < arr.length && cur >= arr[pos]) {
        if (cur > arr[pos]) {
          out.pos.push(i);
          out.peaks.push(arr[i]);
          break;
        }
        pos++;
      }
    }
}
);
  return out;
}
//                     0 1 2 3 4 5 6 7 8 9 1011121314
// console.log(pickPeaks([1,2,5,4,3,2,3,6,4,1,2,3,3,4,5,3,2,1,2,3,5,5,4,3]));


// function findPeak(cur,i,arr) {
//   if (cur > arr[i-1] && cur > arr[i+1]) {
//     return true;
//   }
//   if (cur > arr[i-1] && cur === arr[i+1]) {
//     var pos = i+1;
//     while (pos < arr.length) {
//       if (cur > arr[pos]) {
//         return true;
//       }
//     }
//   }
//   return false;
// }

// function findPlatPeak(cur,i,arr) {
//   if (cur > arr[i-1] && cur === arr[i+1]) {
//     var pos = i+1;
//     while (pos < arr.length) {
//       if (cur > arr[pos]) {
//         return true;
//       }
//     }
//   }
//   return false;
// }

// console.log(pickPeaks([3,2,3,6,4,1,2,3,2,1,2,3]));