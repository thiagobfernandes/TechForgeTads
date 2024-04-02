const prompt=require("prompt-sync") ();

let nascimento=Number(prompt("digite o ano de nascimento "));
let calcular;
calcular = 2024-Number(nascimento);

if(calcular >= 18)
{
    console.log(" Maior")

} 

else {
    console.log("Menor");
}
console.log("sua idade é " + calcular)