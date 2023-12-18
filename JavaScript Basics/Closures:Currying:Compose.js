const first = () => {
	const greet = 'Hi';
	const second = () => {
		alert(greet);
	}
	return second;
}

const newFunc = first();
newFunc();

// Closures
// - A function ran. The function executed, then it's never going to execute again.
// - BUT it's going to remember that there are references to those variables.
// - So, the child scope always has access to the parent scope.
// ** Closures allow a function to access variables from its outer (enclosing),
//     even after that scope has finished executing.


// Currying
// - A function with multiple arguments is transformed into a sequence of functions,
//    each taking a single argument.
// - The idea is that instead of providing all the arguments at once,
//    you provide one argument at a time,
//    creating a chain of partially applied functions.
const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
const multiplyBy5 = curriedMultiply(5);


// Compose
// - Function composition is a functional programming concept that involves
//    combining multiple functions to create a new function.
// - Takes two or more functions as arguments and returns a new function
//    that is the composition of those functions.
const compose = (f, g) => (a) => f(g(a));

const sum = (num) => num + 1;

compose(sum, sum)(5);


