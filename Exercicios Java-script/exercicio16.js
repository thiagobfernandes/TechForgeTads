const prompt=require("prompt-sync") ();
//declarar variaveis e pedir valores
let horas=prompt("digite o valor em horas " );
let minutos=prompt(" digite o valor em minutos " );
let segundos= prompt(" digite o valor em segundos " );
let calcular;
// calcular as horas baseando em quantos segundo tem a hira

horas= Number(horas)*3600;
//calcular minuto multiplicando minutos por segundos que contem a hora

minutos=Number(minutos) * 60;

//deixar segundo nele mesmo para apos somar os valores
segundos=Number(segundos);

//somar os valores
calcular=Number(horas)+Number(minutos)+Number(segundos);
// valor de saida
console.log("o valor em segundos é " +calcular);
