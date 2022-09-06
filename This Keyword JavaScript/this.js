// this.js

// !Ekta function ke different context e reuse korte help kore

/* 
? Rules -> 

* 1. implicit binding
* 2. explicit binding
* 3. new binding
* 4. window binding

*/

//* 1. implicit binding

/* const sakib = {
  name: "sakib",
  age: 35,

  printPlayerName: function () {
    console.log(this.name);
  },
};

sakib.printPlayerName();

const printPlayerName = function (obj) {
  obj.printPlayerName = function () {
    console.log(this.name);
  };
};

const sakib = {
  name: "sakib",
  age: 25,
};
const tamim = {
  name: "tamim",
  age: 25,
};

printPlayerName(sakib);
printPlayerName(tamim);

sakib.printPlayerName();
tamim.printPlayerName();

const Person = function (name, age) {
  return {
    name: name,
    age: age,
    printName: function () {
      console.log(this.name);
    },
    father: {
      name: "Mr X",
      printName: function () {
        console.log(this.name);
      },
    },
  };
};

let person = Person("sakib", 35);

person.printName();
person.father.printName(); */

//* 2. explicit binding

/* let printName = function (x, y, z) {
  console.log(this.name, x, y, z);
};

let x = "mr. x";
let y = "mr. y";
let z = "mr. z";

let rakib = {
  name: "sakib",
  age: 35,
};

//! .call
// printName.call(rakib, x, y, z);
//! .apply
//printName.apply(rakib, [x, y, z]);
//! .bind
let newFunc = printName.bind(rakib, x, y, z);

newFunc(); */
/* 

?ekta function ache and ekta object ache duitai alada scope e , akhon ami jodi oi function ta diye object er kono property ke access korte cai normally ami parbo na , karon function ta to object er kono peoperty na , so ami jeta korte pari call method use kore function er upoer je object er property acess nite cai oi object ta dite pari 

*/

/* 

? Call function duita parameter ney , 1st -> object and 2nd hocche ami jotot iccha variable pass korte pari , ami je value gula pass korbo oigular access tao ami function er moddhe pabo. 

*/

//* 3. new binding();

function Person(name, age) {
  this.name = name;
  this.age = age;
  console.log(`${this.name} is ${this.age} years old`);
}

var sakib = new Person("sakib", 35);
