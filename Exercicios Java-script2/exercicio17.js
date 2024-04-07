const prompt=require("prompt-sync") ();
let mes=prompt("digite o numero do pes aqui");

if(mes==1){
    console.log("Janeiro");
    
}else if(mes==2){
    console.log("Fevereiro");
}else if (mes==3){
    console.log("marco");

}else if (mes==4) {
    console.log("Abril");

} else if (mes==5){
    console.log("Maio");

} else if( mes==6){
    console.log("junho");

} else if(mes==7){
    console.log("julho");

} else if(mes==8){
    console.log("agosto");
} else if (mes==9){
    console.log("setembro");

} else if (mes==10){
    console.log("outubro");

} else if (mes==11){
    console.log("novembro");
} else if (mes==12){
    console.log("dezembro");
} else if (mes  < 1 && mes > 13){
    console.log("invalido");
}
