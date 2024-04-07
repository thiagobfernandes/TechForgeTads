const prompt=require("prompt-sync") ();
//entrada de dados
let slatual=Number(prompt("digite seu salario atual  "));
//constantes
const minimo=11;
const medio=9;
const medioalto=6;
const alto=1;
let calcular;
let novosalario;
//verificando os salarios e adicionando valor da porcentagem ao salario
if( slatual <1320){
    calcular=(Number(minimo)/100)*slatual;
    novosalario=slatual+calcular;
    console.log(" seu novo salario é " +novosalario)
}
if(slatual > 1320){
    calcular=(Number(medio)/100) * slatual;
    novosalario=slatual+calcular;
    console.log(" seu novo salario é " +novosalario)
}
if(slatual > 3000 && slatual < 7000){
    calcular=(Number(medioalto)/100) * slatual;
    novosalario=slatual+calcular;
    console.log(" seu novo salario é " +novosalario)
}
if(slatual > 7000){
    calcular=(Number(alto)/100)*slatual;
    novosalario=slatual+calcular;
    console.log(" seu novo salario é " +novosalario)
}
   
    

