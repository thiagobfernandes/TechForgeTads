//biblioteca
const prompt=require("prompt-sync") ();
// valores de entrada
let divisivel=Number(prompt(" Digite o valor aqui "));
//verificando se os valores 7 ou 23 são divisiveis.
if(divisivel % 7==0 || divisivel % 23 ==0){
    //se for divisivel exibir x valor de saida
    console.log (" o valor " + divisivel +"  é divisivel ");
} else {
     //se  nao for divisivel exibir y valor de saida
    console.log (" o valor  " + divisivel +"  nao é divisivel");
}