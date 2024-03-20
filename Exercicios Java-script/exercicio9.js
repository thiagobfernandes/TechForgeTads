const prompt=require("prompt-sync") ();
// declarando valores de entrada e variaveis
let salario=prompt("digite o salario aqui : ");
let watts=prompt("digite os watts aqui :  " );
let calculo;

//deixando valores como tipo numerico
salario=Number(salario);
watts=Number(watts);

//fazendo o calculo usando a formula, (x/300)*(x/6)
calculo= (watts/300)*(salario/6);

//valor de saida
console.log(" o valor pago sera de : " +calculo.toFixed(2));