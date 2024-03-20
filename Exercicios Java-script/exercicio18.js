const prompt=require("prompt-sync") ();
//declarando valores de entrada e variaveis
let valor=prompt(" digte o valor inteiro e positivo ");
let quadrado;
let raiz;

//utilizando estrutura de decisao if para verificar se valor-
//é positivo ou negativo
if (valor < 0 || valor != parseInt(valor)) {
    console.log("numero invalido");
}
//fazendo os calculos utilizando os comando do java script
quadrado= Math.pow(valor,2);
raiz=Math.sqrt(valor);

//valores de saida
console.log(" o quadrado é " + quadrado);
console.log (" a raiz quadrada é " + raiz);