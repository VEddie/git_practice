class Cat {
	constructor(name, age, color) {
		this._name = name,
		this._age = age
		this._color = color
		this._weight = 3;
	}

	meow() {
		const noises = ['Meow.', 'Meeeoow!', 'Meow?', 'MEEEOOWWW!'];
		return Math.floor(Math.random * noises.length);
	}

	purr() {
		return '*purr*';
	}

	hiss() {
		return 'Hiss!!!';
	}

	eat() {
		this._weight += 0.25;
	}

	get name() {
		return this._name;
	}

	get age() {
		return this._age;
	}

	get color() {
		return this._color;
	}

	get weight() {
		return this._weight;
	}

	set name(newName) {
		if(typeof newName === 'string')
			this._name = newName;
	}

	set age(newAge) {
		if(typeof newAge === 'number')
			this._age = newAge;
	}

	set color(newColor) {
		if(typeof newColor === 'string')
			this._color = newColor;
	}
}

const testCat = new Cat('Eddie', 5, 'White');

console.log(testCat.meow());
console.log(testCat.meow());
console.log(testCat.meow());
testCat.eat();
testCat.eat();
console.log(testCat.weight)
