// Advanced Arrays
// -- forEach, map, filter, reduce


const array = [1, 4, 7, 99, 111];

// forEach
// - Executes a provided function once for each array element.
// Return Value: `undefined`. It's mainly used for its side effects
// Example: Modifying the array elements or performing some action on each element
const double = [];
const newArray = array.forEach(num => {
	double.push(num * 2);
});

console.log('forEach', double);


// map
// - Creates a new array by applying a provided function to
//    each element of the original array.
// Return Value: A new array containing the results of applying the provided
//	              function to each element in the original array.
const mapArray = array.map(num => num * 2);
// const mapArray = array.map(num => {
// 	return num * 2;
// });

console.log('map', mapArray);


// filter
// - Creates a new array containing elements that satisfy a provided condition.
// Return Value: A new array containing only the elements for which
//                the provided function returns `true`.
const filterArray = array.filter(num => num > 5);
// const filterArray = array.filter(num => {
// 	return num > 5;
// })

console.log('filter', filterArray);


// reduce
// - Can do both `filtering` and `mapping` with reduce.
// - Applies a provided function against an accumulator and each element
//    in the array(from left to right) to reduce it to a single value.
// Return Value: The accumulated result.
// accumulator = Is a variable that stores the intermediate result
//                that happens in the body of the function.
const reduceArray = array.reduce((accumulator, num) => {
	return accumulator + num;
}, 0);

console.log('reduceArray', reduceArray);


// * * * * *
// Summary:

// Use `forEach` when you want to iterate over each element with side effects.

// Use `map` when you want to create a new array by transforming each element.

// Use `filter` when you want to create a new array containing elements that satisfy a condition.

// Use `reduce` when you want to reduce an array to a single value by applying a
//  function on each element and accumulating the result.

