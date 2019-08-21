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
console.log(testCat.name);