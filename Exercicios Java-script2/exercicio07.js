const prompt=require("prompt-sync") ();
//valores de entrada
let a=Number((prompt("digite o valor a")));
let b=Number((prompt("digite o valor b")));
let c=Number((prompt("digite o valor c")));
//verificaçao se os numeros sao inteiros
if(a == parseInt(a) && b == parseInt(b) && c== parseInt(c)){
    //verificando os maiores e maiores para colocar em ordem crescente
    if( a < b && b < c ){
        console.log(a,b,c);
    }
    if( b <a && a < c ){
        console.log(b,a,c);
    }
    if(c < a && c < b){
        console.log(c,b,a);
    }
    if(a==b|| b==c ){
        console.log("os numeros nao podem ser iguais")
    }
    
        
    

} else {console.log(" numeros nao sao inteiros")}

