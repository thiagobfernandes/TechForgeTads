const prompt=require("prompt-sync") ();
// Solicitação dos dados ao usuário
let nome = prompt("Digite o nome da pessoa:");
let altura = parseFloat(prompt("Digite a altura (em metros):"));
let peso = parseFloat(prompt("Digite o peso (em Kg):"));

// Cálculo do IMC
let imc = peso / (altura * altura);
let pesoideal;

// Determinação da faixa do IMC
let faixa;
if (imc < 18.5) {
    faixa = "Abaixo do peso";
    pesoideal= Number(imc) * (Math.pow(altura,2));
    console.log("peso ideal " + Number(pesoideal));
} else if (imc < 25) {
    faixa = "Peso normal";
    pesoideal= Number(imc) * (Math.pow(altura,2));
    console.log("peso ideal " + Number(pesoideal));
} else if (imc < 30) { 
    faixa = "Sobrepeso";
    pesoideal= Number(imc) * (Math.pow(altura,2));
    console.log("peso ideal " + Number(pesoideal));
} else if (imc < 35) {
    faixa = "Obesidade grau I";
    pesoideal= Number(imc) *(Math.pow(altura,2));
    console.log("peso ideal " + Number(pesoideal));
} else if (imc < 40) {
    faixa = "Obesidade grau II";
    pesoideal= Number(imc) * (Math.pow(altura,2));
    console.log("peso ideal " + Number(pesoideal));
} else {
    faixa = "Obesidade grau III";
}

// Apresentação do resultado
console.log(nome + " está na faixa de: " + faixa);
