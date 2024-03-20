const prompt=require("prompt-sync") ();
//declarando valores de entrada e variaveis
let base= prompt("digite a base do triangulo : ");
let altura= prompt("digite a altura do triangulo :  ");

//calculando a area do triangulo utilizando
//(base*altura)/2
let triangulo= (Number(base)*Number(altura))/2;

//valor de saida
console.log(" a area do triangulo é " + triangulo);