// //Log to console
// /*
// console.log("Hello World");
// console.log(123);
// console.log(true);
// var greeting = "hello";
// console.log([1,2,3,4]);
// console.log({a:1,b:2});
// console.table({a:1,b:2});
// console.error("this is an error!");
// console.clear();
// console.warn("this is a warning");
// console.time("hello");
//   console.log("hello");
//   console.log("hello");
//   console.log("hello");
//   console.log("hello");
// console.timeEnd("hello");
// */
// // var, let, const
// // VAR  examples
// /**/
// var name = 'John Doe' ;
// console.log(name);
// name = "Sam Smith";
// console.log(name);

// //init var
// var greeting;
// console.log(greeting);
// greeting = "Hello";
// console.log(greeting);

// // Vars=variable. It can contain letters, numbers and special characters.
// // They cannot start with a number.

// //Multi word vars

// var firstName = "John"; // Camel case
// var first_name = "Sara"; // Underscore
// var FirstName = "Tom"; // Pascal case // OO constructive fuctions and ES6 classes

//LET
// let name = 'John Doe' ;
// console.log(name);
// name = "Sam Smith";
// console.log(name);

// CONST when the value must stay the same.

// const name = "John";
// console.log(name);
//cannot reassign
// name= "Sara";
//have to assign a value
//example: const greeting

 //const person = { /*cannot reassign 'person' but you can change the data*/
 // name: "John",
 // age: 30 }

 //person.name = "sara";
 //person.age = 32
//console.log(person);

//const numbers = [1,2,3,4,5]; /*only use const if you intend on not changing a value, initialise or using it in a iterator or a loop.*/
//numbers.push(6) // to add a mutation.
// example error: numbers = [1,2,3,4,5,6]; the reson for this is because it is a whole new array.
//console.log(numbers);

//PRIMITIVE
// String
// const name = "John";
// Number
// const age = 10;
// Boolean
// const hasKids = true;
// Null
// const car = null;
// Underdefined
// let test;
// Symbol
// const sym = Symbol();
// Referance Types - Objects
// Array
// const hobbies = ["movies", " music"];
// Object Literal
// const address = {
//   city: "boston",
//   state: "MA" } 
// const today = new Date();
//   console.log(today);
// console.log(typeof address);
//let val;

// Number to string

//val = String(555);
//val = String(4+4); /*when you make a new val it will override the previous val. val=value*/
// Bool to string
//val = String(true);
// Date to a string
//val = String(new Date());
//array as string
//val= String(1,2,3,4);
// toString() an addtional method which you can use if needed.
//val = (5).toString();
// String  to number
//val = Number("5");
//val = Number(true);
//val = Number(false);
//val = Number(null);
//val = Number("Hello"); /* the output for this will be NaN which means Not a Number*/
//val = Number([1,2,3]); /* the output for this will be NaN which means Not a Number*/
/*To avoid this*/
//val = parseInt("100.30");
//val = parseFloat("100.30"); /* parseFloat to identify it as a decimal*/
// Output
//console.log(val);
//console.log(typeof val);
//console.log(val.length);
//console.log(val.length);
//console.log(val.toFixed(2));

//Type Coercion 
//const val1 = 5;
//const val2 = 2;
//const sum = val1 + val2;

//console.log(sum);
//console.log(typeof sum);
//Type Coercion as string
//const val1 = String(5);
//const val2 = 2;
//const sum = Number(val1 + val2);
//console.log(sum);
//console.log(typeof sum);

//const num1 = 100;
//onst num2 = 50;
//let val;
// Simple maths with numbers
//val = num1 + num2;
//val = num1 % num2;
//Maths Object
//val = Math.PI;
//val = Math.E;
//val = Math.round(2.5); /*rounding*/
//val = Math.ceil(2.4); /*rounding up*/
//val = Math.floor(2.8); /*rounding down*/
//val = Math.sqrt(48836); /*root*/
//val = Math.abs(-7); /*absolute number*/
//val = Math.pow(4,5); /**power of number/
//val = Math.min(2,34,56,42,3); /*min*/
//val = Math.max(3,4,5,3,45);
//val = Math.random();
//val = Math.floor(Math.random() * 20 + 1); /* this is so that you can always get a randomised whole number*/
//console.log(val);

// const firstName = 'James';
// const lastName = 'Bond';
// const age = 30;
// const str = "hello there my name is brad";
// const tags = "web design,web development,web forms";

// let val;

// val = firstName + lastName;

// console.log(val);

// // Concatanation
// val = firstName + " " + lastName;

// // Append
// val = "Cory "
// val += "Travers"

// val = "The name's " + lastName + ", " + firstName + " " + lastName; 

// // Escaping
// val = 'that\'s awesome I can\'t wait'; /* when using single quotes with strings containing puncuation, use backslash. */

// // Length
// val = firstName.length;

// // Concat
// val = firstName.concat(" ", lastName); /* this is the same as using Concatantion*/

// // Change case
// val = firstName.toUpperCase();
// val = firstName.toLowerCase();

// val = firstName[2];

// // indexOf()
// val = firstName.indexOf("a");
// val = firstName.lastIndexOf("m");

// // CharAt()
// val = firstName.charAt('2');
// // Get last char
// val = firstName.charAt(firstName.length - 1); /* this formula will allow you to get the last character of an assigned value when dealing with strings */

// // Substring()
// val = firstName.substring(0, 5);
// // Slice()
// val = firstName.slice(-3); //this will reveal the last 3 characters of a string
// val = firstName.slice(0,5);

// // Split()

// val = str.split(" ");
// val = tags.split(","); //useful for forms for blog posts for tags.
// // Replace()
// val = str.replace("brad", "jack");
// // include()
// val = str.includes("foo");

// console.log(val);

// Template Literals
// const name = "John";
// const age = 34;
// const job = "Web Developer";
// const city = "London";
// let html;


// // Without template strings (es5) complicated version

// html = "<ul><li>Name: " + name + "</li><li>Age: " + age + "</li><li>Job: " + job  + "</li><li>City: " + city +" </li></ul>";

// html = "<ul>" +
//         "<li>Name: " + name + "</li>" +
//         "<li>Age: " + age + "</li>" +
//         "<li>Job: " + job + "</li>" +
//         "<li>City: " + city + "</li>";
//         "</ul>";

// // With template stings/literals simplistic version

// html= `
//   <ul>
//   <li>${name}</li>
//   <li>${age}</li>
//   <li>${job}</li>
//   <li>${city}</li>
//   <li>${age > 30 ? "over 30" : "under 30"}</li> 
//   <ul>` // '>' = greater than. '?' = short hand IF statement ':' = else
// document.body.innerHTML = html;

// Creating Arrays

const numbers = [43,34,23,24,4,55,5,6];
const numbers2 = new Array(22,3,43,34,55,66,543);
const fruit = ["Apple","Pear","Grape","Orange"];
const mixed = [22, "Hello", true, undefined, null, {a:1, b:1}, new Date()];

let val;

// Get array length

val = numbers.length;
// Check if array
val = Array.isArray(numbers);
// Get single vaule from array
val = numbers[3];
// insert into array 
numbers[2] = 100;
//Find index of vaule
val = numbers.indexOf(55);
// MUTATING ARRAYS
// // Add on end
// numbers.push(200);
// // Add on to front
// numbers.unshift(120);
// // take off from end
// numbers.pop();
// // take off from front
// numbers.shift();
// // Splice values
// numbers.splice(1,3);
// // reverse array
// numbers.reverse();

// Concantenate array
// val = numbers.concat(numbers2);
// // Sorting arrays
// val = fruit.sort();
// val - numbers.sort();

// use the compare function 

// val = numbers.sort(function(x, y){
//     return x - y;
// });

// // Reverse sort
// val = numbers.sort(function(x, y){
//   return y - x;
// });

// Find under50
// function under50(num){
//     return num < 50;
// }
// val = numbers.find(under50);
// // Find over50
// function over50(num){
//   return num > 50;
// }
// val = numbers.find(over50);
// console.log(numbers);
// console.log(val);


