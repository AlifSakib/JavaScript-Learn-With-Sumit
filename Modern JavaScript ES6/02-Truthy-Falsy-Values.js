// "02-Truthy-Falsy-Values.js"

//! truthy falsy

/* 
! Confitions for truthy : The value can not be : 

1. flase
2. 0
3. Blank
4. null
5. undefined
6. not a number (NaN)

! ei koyta jinish falsy baki shob truthy

*/

let myLet = null;

if (!myLet) {
  console.log("This is truthy");
} else {
  console.log("This is Falsy");
}
