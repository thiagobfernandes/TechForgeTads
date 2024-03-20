const prompt=require("prompt-sync") ();
//declarando valores de entrada e variaveis
let valor=prompt("digite o valor que sera aplicado " );
let porcentagem;
let novovalor;
//fazendo o calcula utilizando a formula
// (x/100) * x

porcentagem=(11/100)*Number(valor);
novovalor=Number(valor) + Number(porcentagem);

//valor de saida
console.log ("tera de rendimento " + novovalor);