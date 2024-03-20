const prompt=require("prompt-sync") ();
//declarando valores de entrada e variaveis   
let v1=prompt("Digite o primeiro valor");
let v2=prompt("Digite o segundo valor ");
let v3=prompt("DIgite o terceiro valor ");
let soma;
let divisao;
let subtracao;
let multiplicaçao;

//calculando valores utilizando os operadores
// * / + - com 3 valores
soma= Number(v1)+Number(v2)+Number(v3);
subtracao=Number(v1)-Number(v2)-Number(v3);

//aqui especificamente nao entendi se era os 3 valores se dividindo
//entao coloquei um + ali
divisao=Number(v1)+Number(v2)/Number(v3)

multiplicaçao=Number(v1)* Number(v2) * Number(v3);

//valores de saida
console.log(" o valor da soma " + soma);
console.log(" o valor da Subtraçao " + subtracao);
console.log (" o valor da divisao dos 3 valores " + divisao);
console.log (" o valor da multiplicaçao " + multiplicaçao);

