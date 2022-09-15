// 53-JavaScript-Classes.js

//! Use class keyword to create Class
//! Always add a method name constractor();

/* 

class className{

    constructor{

    }
} 

*/

class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  play(status) {
    console.log(this.name, status);
  }
}

const toyotaCar = new Car("Toyota", 2007);
toyotaCar.play("No");
const bmwCar = new Car("Bmw", 2010);
const ferarriCar = new Car("Ferarri", 2018);

console.log(toyotaCar);
console.log(bmwCar);
console.log(ferarriCar);
