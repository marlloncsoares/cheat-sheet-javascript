// ----------------------------------------------
// Creation of variable
// ----------------------------------------------

let name = "Marllon Soares";
let age = 27;
let gender = "masculino";
let birth = new Date('1994-11-01T03:40:00.000Z');

// Showing the variables created
console.log('name: ', name);
console.log('age: ', age);
console.log('gender: ', gender);
console.log('birth: ', birth);

// ----------------------------------------------
// Operation with variables
// ----------------------------------------------

let x = 5;
let y = 6;
let sum = x + y;
console.log('sum: ', sum);

// ----------------------------------------------
// Types of variables
// ----------------------------------------------

let numerical = 10; // Number
console.log('numerical: ', numerical);
console.log(typeof numerical);

let city = "Araçuaí"; // String
console.log('city: ', city);
console.log(typeof city);

let status = true; // Boolean
console.log('status: ', status);
console.log(typeof status);

// ----------------------------------------------
// Types of structure
// ----------------------------------------------

// let students = new Array("Robson", "Maria", "João", "Magda"); // Array
let students = ["Robson", "Maria", "João", "Magda"]; // Array
console.log('students: ', students);
console.log(typeof students);

let person = {
    name: "Robson",
    age: 34
}; // object
console.log('person: ', person);
console.log(typeof person);