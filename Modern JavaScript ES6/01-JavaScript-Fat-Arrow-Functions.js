// ! 01-JavaScript-Fat-Arrow-Functions.js

// ES6 Fat Arrow Function

// WhitOut using Arrow Function .

//? Example 1

const javaScript1 = {
  name: "JavaScript",
  libraries: ["reach", "Angular", "Vue"],

  printLibraries: function () {
    //Eikhane this hocche amar ei object er body ta , so eikhan thek jokhon this diye object e kono property access korte parbo .
    console.log(this);
    this.libraries.forEach(function (a) {
      // kintu eikhane jokhon thik diye ami kichu call korbo tokhon oita pabo na karon this ta amra call back function e moddhe call kortechi , ei problem er solustion hocche
      // ! 1 . Onno ekta variable er moddhe this take rakha : let selft = this , evabe korle amra jodi erpor self.name dei then amra value ta pabo ,
      // ! 2 . Arrow function us kora , Arrow function this keywork niye kono tension i kore na so example 2 er moto amra use korte parbo.

      console.log(`${this.name} loves ${a}`);
    });
  },
};

javaScript1.printLibraries();

//? Example 2

const javaScript = {
  name: "JavaScript",
  libraries: ["reach", "Angular", "Vue"],

  printLibraries: function () {
    this.libraries.forEach((a) => console.log(`${this.name} loves ${a}`));
  },
};

javaScript.printLibraries();

function Person(name) {
  this.name = name;

  // Eikhane amra this er access nite partechi but same kaj ta jodi arrow function diye kori tahole amra this use korle error pabo .
}

const sakib = new Person("sakib");
console.log(sakib.name);
