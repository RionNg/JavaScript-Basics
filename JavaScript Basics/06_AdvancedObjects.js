// Advanced Objects
// -- reference type, context, instantiation

// reference type
// - In JavaScript, objects are reference types.
// - This means that when you create an object, you're creating a reference
//    to a location in memory where the object is stored, rather than
//    creating a copy of the object itself.
// - Reference type examples:
//    - Arrays, functions, and objects(including instances of user-defined classes).
// - Referece type = non-primitive type.
//    - For examples;
//       - `string`, `number`, `boolean`, `null`, `undefined`, `symbol`
var object1 = { value: 10 };
var object2 = object1;
var object3 = { value: 10 };

// object1 === object2; // returns: true
// object1 === object3; // returns: false
// object1.value === object3.value // returns: true
// object2.value === object3.value // returns: true


// context
// - Refers to the value of the `this` keyword within a function.
// - The value of `this` depends on how a function is called.
// - In the global context(outside of any function), `this` refers to the global(window) object.
// - In the context of an object method, `this` refers to the object the method was called on.
// - this.alert("Hi"); <-- `this` means what is the object environment we're in at the moment.
// console.log(this);
// console.log(this === window); // returns: true
const object4 = {
	a: function() {
		console.log(this);
	}
}


// instantiation
// - Refers to the process of creating an instance of a class,
//    which is a blueprint for creating objects with specific properties and methods.
class Player {
	constructor(name, type) {
		console.log('player', this);
		this.name = name;
		this.type = type;
	}
	introduce() {
		console.log(`Hi, I am ${this.name}, I'm a ${this.type}`);
	}
}

class Wizard extends Player {
	constructor(name, type) {
		super(name, type);
		console.log('wizard', this);
	}
	play() {
		console.log(`Hello!! I'm a ${this.type}`);
	}
}

const wizard1 = new Wizard('Polla', 'Healer');
const wizard2 = new Wizard('Zinga', 'Summoner');
const wizard3 = new Wizard('Wiska', 'Dark Magic');


// ** Summary
// Reference types involve objects and how they are stored in memory.
// Context refers to the value of `this` in a function.
// Instantiation involves creating instances of classes or constructor functions to create objects.

