const prompt=require("prompt-sync")();
//declarando valor de entrada e declarando variaveis
//deixando um valor constante, valor de pi
const pi=3.1415;
let raio=prompt("digite o Valor do raio do circulo para calcular a area dele : "  );
let area;

// calculando valor usando a fomula
//pi * raio ^ 2
area=Number(pi)*Math.pow(raio,2);

//deixando valor inteiro por capricho kkk.
area=parseInt(area);

//valor de saida
console.log("a area do circulo é " + area);


