const prompt=require("prompt-sync") ();
// declarando valores de entrada e variaveis
let valor=prompt("digite o preço aqui " );
let desconto=prompt(" digite o valor do desconto " );
let porcentagem;
let novovalor;

// fazendo o calculo de porcentagem utilizando a formula
// (x/100) * x

porcentagem=(Number(desconto)/100)*Number(valor);
novovalor=Number(valor) - porcentagem;

//valores de saida
console.log(" valor original " + valor);
console.log(" Desconto " + desconto);
console.log(" valor que foi reajustado " + porcentagem);
console.log(" o novo valor " + novovalor);
