// 34-Conditions.js

// !switch

const age = 20;

switch (age) {
  case 18:
  case 20:
    console.log("age");
    break;
  case 30:
    console.log("Selected");
    break;
  default:
    console.log("Please contact the support");
}

const date = new Date().getDay();
console.log(date);

switch (date) {
  case 0:
    console.log("sat");
    break;
  case 3:
    console.log(3);
    break;
  default:
    console.log("");
}

/* 

Switch case use strict comparison (===)
that means like if else if we set the value to string and compare it with number it they are same they will return true but for switch case it will not return true . because switch case check both type and value 

*/
