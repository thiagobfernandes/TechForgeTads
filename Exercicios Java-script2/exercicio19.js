const prompt=require("prompt-sync") ();
let p1=Number(prompt("digite a nota da prova 1"));
let p2=Number(prompt("digite a nota da prova 2"));
let t1=Number(prompt("digite a nota do trabalho 1"));
let t2=Number(prompt("digite a nota do trabalho 2"));
let t3=Number(prompt("digite a nota do trabalho 3"));
let t4=Number(prompt("digite a nota do trabalho 4"));
let media1, media2;
let mediafinal;
let porcenteagem1, porcenteagem2;
media1=(p1+p2)/2;
media2=(t1+t2+t3+t4)/4;


porcenteagem1=(50/100)*Number(media1);
porcenteagem2=(50/100)*Number(media2);
mediafinal=Number(porcenteagem1)+Number(porcenteagem2);
if (mediafinal >= 7.0){
    console.log("aprovado");
} else if (mediafinal > 4.0 && mediafinal< 6,99){
    console.log("recuperacao");
}else if ( mediafinal < 4.0){
    console.log("reprovado");
}