// "05-Array-find-method.js"

// Array.prototype.find()

var numbers = [1, 2, 3, 4, 5, 6, 10];

let result = numbers.find(function (currentValue, currentIndex, arr) {
  return currentValue > 2;
}, this);

// ekhane aro duita jinish amra pai ekta hocche currentIndex, arr

console.log(numbers); // Array.find() main array ke change kore na .

console.log(result);

class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  test() {
    console.log("hello");
  }

  exampleFunction() {
    let array = [1, 2, 3];
    array.find(function () {
      this.test();
    }, this); // For normal function we have to call this as a secound perameter when using find method. but if t=we use arrow function then we dont hove to use the secound perameter this.
  }
}

let student = new Student("sumit", 35);

student.exampleFunction();
