// var foo = "Hello";
// // (function() {
//   var bar = " World";
//   console.log(foo + bar);
// // })();
// console.log(foo + bar);


var foo = {n: 1};
var bar = foo;
foo.x = foo = {n: 2};
console.log(bar);
console.log(foo);