// Obtendo a data atual
let now = new Date();
console.log(now);

// Obtém o número de milisegundos desde 01 de Janeiro de 1970, 00:00:00 UTC
let date = Date.parse("01 Jan 2021 00:00:00 GMT");
console.log(date);

// Obter dados de uma data
const newDate = new Date();
console.log("Minutos: ", newDate.getMinutes());
console.log("Horas: ", newDate.getHours());
console.log("Dia do mês: ", newDate.getDate());
console.log("Mês: ", newDate.getMonth());
console.log("Ano: ", newDate.getFullYear());
console.log("Dia da semana: ", newDate.getDay());
console.log("Time: ", newDate.getTime());
