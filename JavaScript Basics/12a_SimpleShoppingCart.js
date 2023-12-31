// Amazon shopping.

// Implement a cart features:
// 1. Add items to cart.
// 2. Add 3% tax to item in cart.
// 3. Buy item: cart --> purchases
// 4. Empty cart
// 5. Track users history.

const user = {
	name: 'Vinn',
	active: true,
	cart: [],
	purchases: []
}

// Function to track user's history
let trackUserHistory = [];
// Using `pipe` technique
const pipe = (f, g) => (...args) => g(f(...args));

purchaseItem(
	addItemToCart,
	addTaxToItems,
	buyItem,
	emptyCart
)(user, {name: 'keyboard', price: 199});

function purchaseItem(...fns) {
	return fns.reduce(pipe);
};

// Function to add items to the user's cart
function addItemToCart(user, item) {
	trackUserHistory.push(user);
	const updateCart = user.cart.concat(item);
	return Object.assign({}, user, { cart: updateCart });
};

// Function to add 3% tax to items in the cart
function addTaxToItems(user) {
	trackUserHistory.push(user);
	const {cart} = user;
	const taxRate = 1.03; // Add 3% tax
	const updatedCart = cart.map(item => {
		return {
			name: item.name,
			price: item.price * taxRate,
		}
	});
	return Object.assign({}, user, { cart: updatedCart });
};

// Function to buy items from the cart
function buyItem(user) {
	trackUserHistory.push(user);
	return Object.assign({}, user, { purchases: user.cart });
};

// Function to empty the cart
function emptyCart(user) {
	trackUserHistory.push(user);
	return Object.assign({}, user, { cart: [] });
};


// // Using `compose` technique
// const compose = (f, g) => (...args) => f(g(...args));

// purchaseItem(
// 	emptyCart,
// 	buyItem,
// 	addTaxToItems,
// 	addItemToCart
// )(user, {name: 'laptop', price: 999});

// function purchaseItem(...fns) {
// 	return fns.reduce(compose);
// }