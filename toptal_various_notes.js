var arr1 = "john".split(''); //[]
var arr2 = arr1.reverse(); //[nhoj]
var arr3 = "jones".split(''); //[jones]
arr2.push(arr3); //[n,h,o,j,[j,o,n,e,s]]
console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1));
console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1));


console.log(1 +  "2" + "2");
console.log(1 +  +"2" + "2");
console.log(1 +  -"1" + "2");
console.log(+"1" +  "1" + "2");
console.log( "A" - "B" + "2");
console.log( "A" - "B" + 2);



var a={},
    b={key:'b'},
    c={key:'c'};

a[b]=123;
a[c]=456;

console.log(a[b]);

// b--> {}


console.log((function f(n){
	return ((n > 1) ? n * f(n-1) : n)
})(10));

// 10 > 1 is true so return 10* f(9)

/*
90*8
720*7 = 14

10-- 
9 -- 
8 --
7 -- 
6 --
...
2 -- 2 * 1 = 2
1 -- 1
*/

(function(x) {
    return (function(y) {
        console.log(x);
    })(2)
})(1);




var hero = {
    _name: 'John Doe',
    getSecretIdentity: function (){
        return this._name;
    }
};

var stoleSecretIdentity = hero.getSecretIdentity;

console.log(stoleSecretIdentity()); // this is global or undefined. need to .bind(hero)
console.log(hero.getSecretIdentity());



/*
Create a function that, given a DOM Element on the page,
will visit the element itself and all of its descendents
(not just its immediate children).

For each element visited, the function should pass that element
to a provided callback function.

The arguments to the function should be:
a DOM element
a callback function (that takes a DOM element as its argument)
*/

function bfs(element,callback) {
	callback(element);
	for (var i = 0; i < element.children.length; i++) {
		bfs(element.children[i], callback);
	}
}


/*
'use strict';
Makes debugging easier. Code errors that would otherwise have been ignored or would have failed silently will now generate errors or throw exceptions, alerting you sooner to problems in your code and directing you more quickly to their source.
Prevents accidental globals. Without strict mode, assigning a value to an undeclared variable automatically creates a global variable with that name. This is one of the most common errors in JavaScript. In strict mode, attempting to do so throws an error.
Eliminates this coercion. Without strict mode, a reference to a this value of null or undefined is automatically coerced to the global. This can cause many headfakes and pull-out-your-hair kind of bugs. In strict mode, referencing a a this value of null or undefined throws an error.
Disallows duplicate property names or parameter values. Strict mode throws an error when it detects a duplicate named property in an object (e.g., var object = {foo: "bar", foo: "baz"};) or a duplicate named argument for a function (e.g., function foo(val1, val2, val1){}), thereby catching what is almost certainly a bug in your code that you might otherwise have wasted lots of time tracking down.
Makes eval() safer. There are some differences in the way eval() behaves in strict mode and in non-strict mode. Most significantly, in strict mode, variables and functions declared inside of an eval() statement are not created in the containing scope (they are created in the containing scope in non-strict mode, which can also be a common source of problems).
Throws error on invalid usage of delete. The delete operator (used to remove properties from objects) cannot be used on non-configurable properties of the object. Non-strict code will fail silently when an attempt is made to delete a non-configurable property, whereas strict mode will throw an error in such a case.

*/



// testing for NaN

typeof NaN === 'number' // !
isNaN(NaN) // true, issues
Number.isNaN(NaN) // true, no issues
NaN !== NaN // tricky test for NaN. only JS value that will return true for (val !== val)


'string'.replace(/s/g,'ppp');




function sum(a,b) {
	if (typeof b !== 'undefined') {
		return a + b;
	}
	return function(y) {
		return a + y;
	};
}
console.log(sum(4,5));
console.log(sum(4)(5));






