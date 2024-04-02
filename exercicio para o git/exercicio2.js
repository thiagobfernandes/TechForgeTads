const prompt=require("prompt-sync") ();
function verificarnumero(numero){
    if (numero % 2 == 0){
        console.log("é par")

    }else {
        console.log("impar");
    }
}

let valor=Number(prompt("digite o numero "));
verificarnumero(valor);