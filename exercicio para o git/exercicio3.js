// Declare uma string
let minhaString = "Olá, mundo! Esta é uma string de exemplo.";

// Imprima o comprimento da string
console.log("Comprimento da string:", minhaString.length);

// Converta a string para letras maiúsculas
let minhaStringMaiuscula = minhaString.toUpperCase();
console.log("String em letras maiúsculas:", minhaStringMaiuscula);

// Divida a string em palavras e imprima cada palavra no console
let palavras = minhaString.split(" ");
console.log("Palavras na string:");
for (let palavra of palavras) {
    console.log(palavra);
}
