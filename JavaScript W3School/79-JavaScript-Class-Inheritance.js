// 79-JavaScript-Class-Inheritance.js

class Car {
  constructor(brans) {
    this.carname = brans;
  }

  present() {
    return "I have a " + this.carname;
  }
}

class Model extends Car {
  constructor(brand, mod) {
    super(brand);
    this.model = mod;
  }

  show() {
    return this.present() + " it is a " + this.model;
  }
}

let myCar = new Model("Ford", "Mustang");

console.log(myCar.show());

class Animal {
  constructor(name) {
    this.name = name;
  }

  get animalname() {
    return this.name;
  }

  set animalname(dogname) {
    this.name = dogname;
  }
}

const animal = new Animal("Quincy");
animal.animalname = "Hunter";
console.log(animal.animalname);
