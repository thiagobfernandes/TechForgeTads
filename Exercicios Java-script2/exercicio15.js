const prompt=require("prompt-sync") ();
let laranjas=Number(prompt("digite o numero de laranjas compradas"));

//verificar as 
if(laranjas < 12){
    console.log(" os preços das laranjas é"+ (laranjas * 0.40));
} else if (laranjas > 12){
    console.log(" os preços das laranjas é"+ (laranjas * 0.28));

}