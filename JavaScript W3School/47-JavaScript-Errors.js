// 47-JavaScript-Errors.js

/* 

* The try statement let us to test a block of code for error.
* The catch statement lets us to handle the error.
* The throw statement lets us to create custom error.
* The finally statement lets us to execute code, after try and catch, regardless of the result.

*/

try {
  // reguler code
} catch (err) {
  console.log(err.message);
}

//? JavaScript Throw Errors

const num = "Al";

try {
  if (num == " ") throw "Empty";
  if (num < 5) throw "Too Low";
  if (num > 15) throw "Too High";
  if (isNaN(num))
    throw {
      message: "Too High",
      name: "High number Entered",
    };
} catch (err) {
  console.log(err);
}
