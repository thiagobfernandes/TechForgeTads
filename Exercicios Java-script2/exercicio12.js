const prompt=require("prompt-sync") ();
//dados de entrada
let lados=Number(prompt("digite a quantidade de lados "));
let medida=Number(prompt("digite a medida em cm "));
let cal;

//verificaão de acordo com os lados e fazer os calculos de acordo com suas condioçes
if (lados==3){
    console.log(" triangulo ");
    cal=(medida * medida) /2;
    console.log("a area do triangulo é " + cal);

} else if (lados==4){
    console.log(" quadrado ");
    console.log("a area do quadrado é " + (medida * medida));
 
} else if (lados==5){
    console.log("Pentagono"); 

} else if(lados < 3 || lados > 5){
    console.log("nao é poligono") }
    // console.log saida de dados



