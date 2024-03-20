const prompt=require("prompt-sync") ();
//declarando valor de entrada e variaveis
let valornumerico=prompt("digite o valor numero " );
let primeirovalor;
let ultimovalor;
let novovalor;

//aqui estou selecionando o primeiro valor
primeirovalor=valornumerico.charAt(0);

//aqui estou pegando o ultimo valor 
ultimovalor=valornumerico.charAt(valornumerico.length -1);

//aqui estou conectando os dois valores utilizando o substring
//para alterar os valores sem mexer nos valores do meio apenas o primeiro e ultimo
novovalor=ultimovalor+valornumerico.substring(1, valornumerico.length -1) + primeirovalor;


//exibindo valor
console.log(novovalor);
