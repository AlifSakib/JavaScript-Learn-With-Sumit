// 77-JavaScript-Function-Closures.js

// !JavaScript Colusers

// !Global variable can be made local(private) with closures

/* 

! Global Variable

function myFunction(){
    let a = 4
    return a * a
}

*/

/* function add() {
  let counter = 0;
  counter += 1;
  return counter;
}

add();
add();
add();

console.log(counter);
 */

function temporary() {
  let counter = 0;

  return function () {
    counter += 1;
    return counter;
  };
}

const add = temporary();

console.log(add());
console.log(add());
console.log(add());
