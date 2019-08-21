class Cat {
	constructor(name, age, color) {
		this._name = name,
		this._age = age
		this._color = color
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
}

const testCat = new Cat('Eddie', 5, 'White');
console.log(testCat.name);