const prompt=require("prompt-sync") ();
//entrada de dados
let lado1=Number(prompt(" digite o primeiro lado do triangulo  "));
let lado2=Number(prompt(" digite o segundo lado do triangulo  "));
let lado3=Number(prompt(" digite o terceiro lado do triangulo  "));
// verificando de os lados de triangulo e adicionando condiçoes em cada verificaçao
if (lado1==lado2 && lado2==lado3){
    console.log("triangulo equilatero");

}

if (lado1==lado2||lado2==lado3 ||lado1==lado3){
    console.log("triangulo isósceles");
}

if( lado1 != lado2 && lado2 != lado3 && lado1!=lado3){
console.log(" Triangulo escaleno")
}

// os console.logs são a saida de dados, dadas as condiçoes