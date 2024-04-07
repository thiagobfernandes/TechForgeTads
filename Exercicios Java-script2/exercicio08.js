const prompt=require("prompt-sync") ();
//valores de entrada
let prova1=Number(prompt("digite a nota da prova1  "));
let prova2=Number(prompt("digite a nota da prova2  "));
let trab1=Number(prompt("digite a nota do trabalho "));
let trab2=Number(prompt("digite a nota do 2 trabalho "));
//calculando a media
let media;
media=(prova1+prova2+trab1+trab2)/4;
//verificaçao da media e adicioar condiçoes em cada if
if (media >= 7.0){
    console.log("aprovado");

}
if(media > 4.0 && media < 6.99){
    console.log("recuperaçao")
}

if(media < 4.0){
    console.log("reprovado");
}