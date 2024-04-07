const prompt=require("prompt-sync") ();
let angulo1=Number(prompt("digite o primeiro angulo"));
let angulo2=Number(prompt("digite o segundo angul"));
let angulo3=Number(prompt("digite o terceiro numero"));
 // verificar angulos de acordo com as condicoes dadas
 //e adicionar valor de saida de acordo
if (angulo1 == 90  || angulo2 ==90 || angulo3==90){
    console.log("Triangulo reto");

} else if (angulo1 > 90  || angulo2 >90 || angulo3 > 90){
    console.log("Obtusângulo");

} else if (angulo1 < 90  && angulo2 < 90 && angulo3 < 90){
    console.log("Acutângulo");

}
