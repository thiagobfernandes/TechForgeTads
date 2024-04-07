const prompt=require("prompt-sync") ();
//entrada de dados
let ano=Number(prompt("digite o ano aqui"));
let anobisexto;
//verificaçao
if( (ano % 400==0 ) || (ano % 4 ==0 && ano % 100 !=0)){
    console.log(" ano bissexto");

} else  {
    console.log (" nao bissexto");
}