// 43-JavaScript-typeof-operator.js

//! Type of is a operator

/* 

? In JS There are 5 datatypes that can contain value 

* string 
* number 
* boolean 
* object 
* function

? And There are 6 types of object

* Object 
* Date 
* Array 
* String 
* Number 
* Boolean 

? And 2 Data type that cannot contain values 

* null 
* undefined  


? Premitive Data

* string
* number 
* boolean
* undefined

? We can also check the constructor by calling .constructor after a data type , like this => "jhon" and it will return who cheate this .

for string costructor is String()
for numbers constructor is Number()
for False constructor is Boolean
for Array constructor is Array
for Object constructor is Object
for Date constructor is Date
for function constructor is Function
*/

function isArray(arr) {
  console.log(arr.constructor.toString().indexOf("Array") > -1);
}

isArray([1, 2, , 3]);
