const prompt=require("prompt-sync") ();
//pedindo valores de entrada e declarando variaveis
let tempogasto=prompt(" digite o tempo gasto " );
let velocidademedia=prompt("digite a velocidade media " );
let distancia;
let litrosusados;
//calcular distancia com a formula tempo*velocidade
distancia=Number(tempo) * Number(velocidademedia);
//calculando litros com a formula distancia/16
litrosusados=Number(distancia)/16;
//valores de saida
console.log(" distancia " +distancia);
console.log(" litros usados " +litrosusados);
