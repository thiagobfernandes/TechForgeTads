const prompt=require("prompt-sync")();
// declarando valores de entrada e variaveis
let segundos, minutos, horas;
segundos=prompt("digite os segundos aqui " );


//calculando os valores baseando na logica do tempo
//1 minuto tem 60segundos e 1 hora tem 60minutos.

minutos=segundos/60;
horas=minutos/60

console.log(segundos + " segundos  tem " + horas + "hora e " + minutos + " minutos ");
