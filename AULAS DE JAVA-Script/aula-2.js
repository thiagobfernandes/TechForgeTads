const prompt=require("prompt-sync") ();

let v1=prompt("digite o primeiro valor");
let v2=prompt(" digite o segundo valor ");
let v3=prompt ("digite o terceiro valor ");
let v4=prompt ("digite o quarto valor ");
let elevado=Math.pow(v2,v3);
let quadrado=Math.sqrt(v4);
let soma= Number(v1)+Number(v2)+Number(v3)+Number(v4);
let menos= Number(v1)-Number(v2)-Number(v3)-Number(v4);
console.log(" o valor elevado é " + elevado);
console.log (" o valor em raiz quadrada é " + quadrado);
console.log (" o valor somado é " + soma);
console.log (" o valor subtraido é " + menos);

