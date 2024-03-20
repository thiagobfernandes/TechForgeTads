const prompt=require("prompt-sync")();
//declarando variaveis e valores de entrada
let lado=prompt("digite o valor do lado do triangulo equilatero: ");
let area;

//fazendo calculo utilizando a formula
//lado ao quadrado * raiz de 3 /4
area=(Math.pow(lado,2) * Math.sqrt(3))/4;

//deixando valor inteiro
area=parseInt(area);

//valor de saida
console.log(" a area do triangulo equilatero é " + area);