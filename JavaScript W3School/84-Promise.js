// 84-Promise.js

let stat = false;

console.log("Task 1");

const promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    if (stat) {
      resolve("Task 2");
    } else {
      reject("failed");
    }
  }, 2000);
});

promise
  .then(function (value) {
    console.log(value);
  })
  .catch(function (err) {
    console.log(err);
  });

console.log("Task 3");
