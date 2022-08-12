// TODO: 07-JavaScript-let-Keyword.js

// * let keyword was introduced in ES6(2015)
// * let cannot be redeclared
// * let must define before use
// * let have Block Scope

function sleep() {
  //Function Scope
}

let x = 10; //Global Scope

if (true) {
  //Block Scope

  let x = 6;
  console.log(x);
}

// TODO: Let Hoisting // hoisting means uporer dik e tola

// var carName;
// carName = undefined;

carName = "Volvo";

var carName; //Here we set the carName first and then we declare carName in a variable, and we can console log i .Nice ! its happening because javaScript 1st e code gula read kore and jekhane jekhane declaration ache oigulake hoist upore niye jay. Thats why kono error dey na. and she sudhu uporei uthe jay na she carName = undefined; set kore dey.

// but amra jodi let use kori same way te tahole error dibe , reason hocche let er somoy o hoist kore upore niye jay kintu var er khetre jmn carName = undefined; set korchilo let er somoy just ei step ta hoy na .

// var uporer dik e uthe ekta default value diye dey , CarName = undefined; name memory ke bole dey user ke carName nam e ekta jayga dao memeoy te . but let er khetre ei step ta hoy na , and jokhon let value set korte jay tokhon memory te kono jayga pay na and error return kore. let er khetre ei jinish ta ke temporary dead zone bola hoy .
