const prompt=require("prompt-sync") ();
//declarando valor de entrada e variaveis
let  qtdechuva=prompt("digite a quantidade de chuvas em polegadas " );
let milimetros=25.4;
let calculo;

//fazendo o calculo multiplicando a quantidade de polegadas
// * milimetros, ja deixei declarado o valor do milimetro
// facilitando o calculo
calculo=Number(qtdechuva)*Number(milimetros);

//valor de saida
console.log(" choveu " + calculo + " milimetros ");
