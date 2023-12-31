// Compose
// data -(processed by)-> function -(output)-> data -(processed by another)-> function --> 
// - `compose` typically refers to a functional programming concept known as function composition.
// - Function composition is a technique where you combine multiple functions to create a new function.
// - The result of one function becomes the input to another, forming a chain of functions.

const compose = (a, b) => (data) => a(b(data));
const multiplyBy3 = (num) => num * 3;
const makePositive = (num) => Math.abs(num);
const multiplyBy3AndAbsolute = compose(multiplyBy3, makePositive);

multiplyBy3AndAbsolute(-33);


// Pipe
// - `pipe` typically refers to a functional programming concept similar to function composition.
// - Function piping involves chaining functions together, where the result of one function becomes
//    the input for the next function in a sequential manner.
// - It's a way of expressing a series of transformations in a more readable and linear fashion.
const pipe = (c, d) => (data) => d(c(data));
const multiplyBy5 = (num) => num * 5;
const makeNumPositive = (num) => Math.abs(num);
const multiplyBy5AndAbsolute = compose(multiplyBy5, makeNumPositive);

multiplyBy5AndAbsolute(-17);


// Compose Vs. Pipe

// function1(function2(function3(50)));

// compose ==> (function1, function2, function3)(50);
// - The example here, `compose` is going to grab 50 then start off with function1,
//    then function2, lastly function3.
// - By expressing a series of operations in a right-to-left fashion.

// pipe ==> (function3, function2, function1)(50);
// - The example here, `pipe` is going to grab 50 then start off with function3,
//    then function2, lastly function1.
// - By expressing a series of operations in a left-to-right fashion.

