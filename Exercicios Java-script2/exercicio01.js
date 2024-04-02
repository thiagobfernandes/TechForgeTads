const prompt=require("prompt-sync") ();
// valor de entrada
let valor=Number(prompt("digite o numero aqui "));
let par;

//verificando se o numero é par 
if (valor % 2  === 0 ){
par=valor;
//valor de saida
console.log (" o numero é par " + par)



} else {
    //se o valor nao for par mostrar valor de saida abaixo
    console.log (" numero é impar ");

}
//verificando se  o valor é divisivel por 10
if ( valor % 10 == 0){
    //valor de saida
    console.log(" o valor é divisivel por 10");

} else {
    //se o valor nao for divisivel mostrar valor de saida abaixo
    console.log(" nao é divisivel por 10");
}


