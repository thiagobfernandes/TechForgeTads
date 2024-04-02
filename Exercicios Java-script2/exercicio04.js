const prompt=require("prompt-sync") ();
// Solicitação dos dados ao usuário
var nome = prompt("Digite o nome da pessoa:");
var altura = parseFloat(prompt("Digite a altura (em metros):"));
var peso = parseFloat(prompt("Digite o peso (em Kg):"));

// Cálculo do IMC
var imc = peso / (altura * altura);

// Determinação da faixa do IMC
var faixa;
if (imc < 18.5) {
    faixa = "Abaixo do peso";
} else if (imc < 25) {
    faixa = "Peso normal";
} else if (imc < 30) {
    faixa = "Sobrepeso";
} else if (imc < 35) {
    faixa = "Obesidade grau I";
} else if (imc < 40) {
    faixa = "Obesidade grau II";
} else {
    faixa = "Obesidade grau III";
}

// Apresentação do resultado
console.log(nome + " está na faixa de: " + faixa);
