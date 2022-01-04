// Declaração IF (if statement)
let age = 18;
if (age >= 18) {
    console.log("Você pode dirigir");
}

// If else statement
if (age >= 18) {
    console.log("Você pode dirigir");
} else {
    console.log("Você não pode dirigir");
}

// If else if statement
const value = 5;
if (value >= 0 && value <= 10) {
    console.log("Valor entre 0 e 10");
} else if (value >= 11 && value <= 20) {
    console.log("Valor entre 11 e 20");
} else {
    console.log("Valor maior que 20");
}

// If aninhado
if (age >= 18) {
    const havePermission = true;
    if (havePermission) {
        console.log("Você pode dirigir");
    } else {
        console.log("Você não pode dirigir");
    }
} else {
    console.log("Você não tem idade para dirigir");
}