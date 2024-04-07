const prompt=require("prompt-sync") ();
const validar= 5479;
//valores de entrada
let senha=prompt("digite a senha ");
//validar senha de acordo com a variavel const
if (senha == validar){
    console.log(" ACESSO PERMITIDO ");
} else {
    console.log("ACESSO NEGADO");
}
//console.log valores de saida