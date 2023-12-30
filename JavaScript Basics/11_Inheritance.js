// inheritance

class Character {
	constructor(name, weapon) {
		this.name = name;
		this.weapon = weapon;
	}
	attack() {
		return this.name + ' attack with ' + this.weapon;
	}
}

class Elf extends Character {
	constructor(name, weapon, type) {
		super(name, weapon);
		this.type = type;
		console.log(this);
	}
}

class Ogre extends Character {
	constructor(name, weapon, color) {
		super(name, weapon);
		this.color = color;
		console.log(this);
	}
	makeFort() {
		return 'strongest fort made by ' + this.name;
	}
}

const tinky = new Elf('Tinky', 'bow', 'protector');
console.log(tinky.attack());

const wonka = new Ogre('Wonka', 'club', 'red');
console.log(wonka.makeFort());

