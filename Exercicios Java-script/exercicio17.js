const prompt=require("prompt-sync") ();
//pedindo valores
let valoraplicado=prompt("digite o valor que sera aplicado " );
let percentual=prompt(" digite o percentual de lucro " );
let percentual2;
let rendimento;

//calcular os valores utilizando a formula
// (x/100)*x

percentual2=(Number(percentual)/100) * Number(valoraplicado);
rendimento=Number(valoraplicado)+Number(percentual2);
// exibir rendimento;

console.log(" o rendimento sera de " + rendimento);