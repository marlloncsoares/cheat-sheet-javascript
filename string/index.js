// Criando strings
let name = "Marllon Soares";

// Concatenção de string
let firstName = "Marllon";
let lastName = "Soares";
let fullName = firstName + " " + lastName;

// Trim - remove espaços no início e no fim
let message = " hoje é dia de feriado ";
console.log(message.trim());

// Replace
let city = "Arassuaí";
city = city.replace("ss", "ç"); // Arassuai -> Araçuaí
console.log(city);

// toLowerCase
let text = "Hoje é um dia de sol.";
console.log(text.toLowerCase()); // hoje é um dia de sol.

// toUpperCase
console.log(text.toUpperCase()); // HOJE É UM DIA DE SOL.

// Template literals
let x = 5;
let y = 10;
let sum = x + y;
let result = `A soma de ${x} + ${y} é igual a ${sum}`;
console.log(result);


