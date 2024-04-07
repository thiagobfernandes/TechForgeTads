const prompt=require("prompt-sync") ();
let peso=parseFloat(prompt("digite o peso  "));
let altura=parseFloat(prompt("digite a altura  "));
let calculo;

calculo=peso/(altura*altura);

if( calculo < 18.5){
    console.log("magreza");
} else if (calculo > 18.5 && calculo < 24.5){
        console.log("Saudavel");
     } else if( calculo > 25 && calculo < 29 ){
        console.log("sobrepeso");
     } else if ( calculo > 30 && calculo <34.9){
        console.log("obesidade grau I");
     } else if ( calculo > 35 && calculo < 39.9){
        console.log("Obesidade grau II");
     } else if ( calculo > 40.0){
        console.log("obesidade grau III");
     }

