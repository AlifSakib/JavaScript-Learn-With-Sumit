// 69-JavaScript-Object-Iterables.js

/* JAvaScrip kivabe bujhe je object iterable na ? ar Array iterable ? 

ok the answer is amra jodi ekta object ke clg.dir kori amra dekhbo oitar prototype er moddeh kono Symbol.iterator nam e kono kichu nai , but array ke clg.dir korle oi jinish ta pawa jabe . and javaScript evabei bujhe je Object iterable na but array iterable . */

const arr = [1, 2, 3];

console.dir(arr[Symbol.iterator]());

const myNumber = {};

myNumber[Symbol.iterator] = function () {
  let n = 0;
  return {
    next() {
      n += 10;
      if (n == 100) {
        done = true;
      }
    },
  };
};
