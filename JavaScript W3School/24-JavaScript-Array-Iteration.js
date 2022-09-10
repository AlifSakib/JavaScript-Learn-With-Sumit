// 24-JavaScript-Array-Iteration.js

var numbers = [45, 4, 9, 16, 25]

function myFunction(){  

}

numbers.forEach(myFunction)  // What for each does is when we call him in a array he have some mecanism which he pass into the empty function. and the function takes 3 arguments. VALUE,INDEX,ARRAY


// !Array.map() 

/* var numbers = [45, 4, 9, 16, 25]

function myFunction(value,index,array){
    return value * 2  

}

var newNumbers = numbers.map(myFunction) // Map returns values which can we save into new array

console.log(newNumbers) */


// !Array.filter()

/* var numbers = [45, 4, 9, 16, 25]

function myFunction(value,index,array){
    return value > 20;
}

var newNumbers = numbers.filter(myFunction)

console.log(newNumbers) */


// !Array.reduce()

/* var numbers = [45, 4, 9, 16, 25]

function myFunction(total,value,index,array){
    return total + value;
}

var newNumbers = numbers.reduce(myFunction) */ // reduce also take another parameter where we can set the initial value to any number and if we dont mention the initial value then the initial value will be 0 by default.

//Example var newNumbers = numbers.reduce(myFunction, 10)

// console.log(newNumbers)


// !Array.reduceRight()

// same as reduce but it calculate values from right to left and return the total of the array.

// !Array.every()

// Array.every() like filter but what filter was doing is returning value which was grater then 18 , but what every do is he check all the value if all the values are > 18 then return true else return flase .

// !Array.some()

// this is like Array.every() but eikhane jodi 1 ta value o 18 theke boro hoy tahole true return korbe .

// !Array.indexOf()
// !Array.find()
// !Array.findIndex()
// !Array.form()
// !Array.keys()
