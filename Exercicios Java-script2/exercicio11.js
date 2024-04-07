const prompt=require("prompt-sync") ();
//valores de entrada
let valor=Number(prompt("digite o valor aqui "));
let novovalor;
let porcentagem;
//verificaçao de valores
if(valor <= 2000){
    porcentagem=(10/100) * valor;
    novovalor=valor+porcentagem;
    console.log(" novo valor é  " + novovalor);
    console.log(" a taxa de correçao 10% ou" + porcentagem);

} else if(valor <= 5000){

    porcentagem=(12/100) * valor;
    novovalor=valor+porcentagem;
    console.log(" novo valor é  " + novovalor);
    console.log(" a taxa de correçao 12% ou" + porcentagem);

} else{
    porcentagem=(13/100) * valor;
    novovalor=valor+porcentagem;
    console.log(" novo valor é  " + novovalor);
    console.log(" a taxa de correçao 13% ou" + porcentagem);

}



