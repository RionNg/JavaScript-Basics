// `this` keyword

// new binding this
function Person (name, age) {
	this.name = name;
	this.age = age;
}

const person1 = new Person('Ronald', 27);
person1;


// implicit binding
const person = {
	name: 'Kenji',
	age: 30,
	hi() {
		console.log('Hi, ' + this.name);
	}
}


// explicit binding
const person3 = {
	name: 'Nisha',
	age: 23,
	hi: function() {
		console.log('Hi' + this.setTimeout)
	}.bind(window)
}


// arrow function (lexical scoping)
const person4 = {
	name: 'Roonie',
	age: 29,
	hi: function() {
		var inner = () => {
			console.log('Hi, ' + this.name);
		}
		return inner();
	}
}

person4.hi();
