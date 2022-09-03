// Asynchronous-JavaScript.js

// JavaScript eksathe onekgula kaj korte pare na , at e time ekta kaj i korte pare , tai javscript eka single threaded programming language .

// Synchronous Blocking Behavior

// !Example :

/* const processOrder = (customer) => {
  console.log(`Processing order for customer 1`);

  setTimeout(() => {}, 30000);
};
console.log(`Take order For Customer 1`);
processOrder();
console.log(`Completed order for customer 1`); */

console.log("this is a text");

setTimeout(() => {
  console.log("Print this");
}, 10000);

console.log("yes");

// JavaScript jokhon ei setTimeout built in function ta dekhbe tokhon javaScript ei block ta wep api er kache pathay dibe , web Api hocche runtime environment er ekta ongsho . runtime hocche browser er window ta .

// callBack quequ nam e arekta jinish ache , etao runtime environment er ekta part , and tar sathe event loop nam e arekta chotto jinish ache

/* call Stack -> Last in First Out 
callbackQueue -> first in first out  */
