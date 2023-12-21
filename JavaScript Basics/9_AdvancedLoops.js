// Advanced Loops


const basket = ['apples', 'oranges', 'grapes'];
const detailedBasket = {
	apples: 10,
	oranges: 5,
	grapes: 200
}

// Basic way of looping
for (let i = 0; i < basket.length; i++) {
	console.log(basket[i]);
}

// `forEach` loop
basket.forEach(item => {
	console.log(item);
})


// `for...of`
// Iterating - We're able to go one by one and look through the items.
// - Arrays and strings are iterable.
for (item of basket) {
	console.log(item);
}


// `for...in` loop
// - We're able to loop over and see the object properties
// Enumerating - For objects
// - Properties of an object = enumerable
for (item in detailedBasket) {
	console.log(item);
}