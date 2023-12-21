// Pass by Value Vs Pass by Reference

// Pass by Value
// - JavaScript is always pass-by-value.
// - When you pass a primitive type(like a number or string) to a function,
//    a copy of the value is passed.
// - Changes to the parameter inside the function do not affect the original
//    value outside the function.

//     a          b
//     |          |
// Primitive  Primitive
//   Type       Type
var a = 5;
var b = a;
b++;

console.log(a); // return: 5
console.log(b); // return: 6


// Pass by Reference
// - When you pass an object to a function, you are passing a reference to that
//    object(not a copy of the object itself).
// - This reference points to the same object in memory, so changes to the object
//    inside the function affect the original object outside the function.

//    a      b
//     \    /
//     Object

// EXAMPLE 1
let object1 = { name: 'Boo', password: '123'};
let object2 = object1;
object2.password = 'abcabc';

console.log(object1); // return: { name: 'Boo', password: 'abcabc' }
console.log(object2); // return: { name: 'Boo', password: 'abcabc' }

// EXAMPLE 2
let c = [1, 2, 3];
let d = c;
d.push (12345);

console.log(c); // return: [1, 2, 3, 12345]
console.log(d); // return: [1, 2, 3, 12345]

// EXAMPLE 3
let e = [7, 8, 9];
let f = [].concat(e);
f.push (777);

console.log(e); // return: [7, 8, 9]
console.log(f); // return: [7, 8, 9, 777]

// EXAMPLE 4
let object3 = {
	a: 'a', 
	b: 'b', 
	c: {
		deep: 'Hello!'
	}
};
let clone = Object.assign({}, object3);
let clone2 = {...object3};
let superClone = JSON.parse(JSON.stringify(object3));

// EXAMPLE 4a 
object3.c = 'zzz';
console.log(object3); // return: {a: 'a', b: 'b', c: 'zzz'}
console.log(clone); // return: {a: 'a', b: 'b', c: {say: 'Hello!'} }
console.log(clone2); // return: {a: 'a', b: 'b', c: {say: 'Hello!'} }
console.log(superClone); // return: {a: 'a', b: 'b', c: {say: 'Hello!'} }

// EXAMPLE 4b (Shallow Clone - this gonna clone everything)
object3.c.deep = 'O M G!!';
console.log(object3); // return: {a: 'a', b: 'b', c: {say: 'O M G!!'} }
console.log(clone); // return: {a: 'a', b: 'b', c: {say: 'O M G!!'} } 
console.log(clone2); // return: {a: 'a', b: 'b', c: {say: 'O M G!!'} }
console.log(superClone); // return: {a: 'a', b: 'b', c: {say: 'Hello!'} }



// ** Summary
// - It's important to note that the term "pass by reference" is not entirely accurate
//    for JavaScript.
// - What's happening is more accurately described as "passing a reference by value".
// - The reference itself is copied, but it still points to the same underlying period.
// - Arrays, functions, and objects are passed by sharing the reference(or by value if you
//    want to be more precise about it), while primitive types are passed by value.
