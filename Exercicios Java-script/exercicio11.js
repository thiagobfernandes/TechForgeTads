const prompt=require("prompt-sync") ();
// declarando variaveis
let v1,v2,v3,v4;
let media;
//pedindo valores de entrada
v1=prompt("digite o valor da primeira avaliaçao ");
v2=prompt("digite o valor da segunda avaliaçao ");
v3=prompt("digite o valor da terceira avaliaçao ");
v4=prompt("digite o valor da quarta avaliaçao ");

//calculando a media utilizanndo (x+x+x+x)/4
media=(Number(v1)+Number(v2)+Number(v3)+Number(v4))/4;

//valor de sainda, usando o toFixed para usar apenas uma casa decimal.
console.log(" a sua media é " + media.toFixed(1));