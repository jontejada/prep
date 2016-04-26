function toWeirdCase(string){
  var arr = string.split('');
  var charI = 0
  for (var i = 0; i < arr.length; i++) {
    if(charI%2 === 0) {
      arr[i] = arr[i].toUpperCase(); 
    }
    charI++;
    if (arr[i] === ' ') {
      charI = 0;
    }
  }
  return arr.join('');
}
// console.log(toWeirdCase('one two three'));
console.log(toWeirdCase('This is a test'));