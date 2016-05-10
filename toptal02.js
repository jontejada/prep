'use strict'; // throws error on line 3 : reference error, b is not defined. no longer leaks a global
// (function(){
// 	var a = b = 3;
// })();

// console.log(typeof a); // undefined
// console.log(typeof b); // number



//03

var myObject = {
    foo: "bar",
    func: function() {
        var self = this;
        console.log("outer func:  this.foo = " + this.foo); // "bar"
        console.log("outer func:  self.foo = " + self.foo); // "bar"
        (function() {
            console.log("inner func:  this.foo = " + this.foo); // undefined (this is the global object pre ES5, undefined after)
            console.log("inner func:  self.foo = " + self.foo); // "bar"
        }());
    }
};
myObject.func();
