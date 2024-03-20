const prompt=require("prompt-sync") ();
//declarando valores de entrada e variaveis
let a=prompt("Digite o primeiro valor:   ");
let b=prompt ("Digite o segundo valor:  ");
let c=prompt ("Digite o terceiro valor:  ");

//calculando utilizando a+c-b
let d= Number(a)+Number(c)-Number(b);

//valor de saida
console.log(" O valor do calculo é:  " + d)
