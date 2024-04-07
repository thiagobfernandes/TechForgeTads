const prompt=require("prompt-sync") ();

let tabuada=prompt("digite o numero no qual deseja saber a tabuada");
let x;
let valor;

for(x=0; x <= 10; x++){
    valor=tabuada*x;
    console.log(valor);


}

