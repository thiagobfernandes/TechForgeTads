const prompt=require("prompt-sync") ();
//valores de entrada.
// o maior -1 é para que o maior valor se atualize, o -1 é o menor valor entao-
//quando um maior valor for inserido ele se atualiza.
let maior=-1;
let valor;
let i;
let posicao;

//laço de repetiçao para verificar cada valor, OBS: nao sei se eu deveria usar o for agr
// se era para fazer de outra forma desculpe nao pensei em outra.
    for ( i = 0; i < 5; i++) {
        valor=Number(prompt("digite o valor aqui " + (i+1) + " "));
        //verificar se cada valor é inteiro
        if (valor== parseInt(valor)){

            //o maior valor e posiçao
            if( valor > maior) {
                maior=valor;
                posicao=i;
            }
            

            
        } else {
            // se o valor nao for inteiro o programa vai avisar que nao é inteiro e pedir o proximo valor
            console.log(" o valor nao é inteiro");
        
        }
       
        
        
    }
    //exibir o maior e a posiçao dele
    console.log(" o maior valor é " + maior + " a posiçao é " + "(" + (posicao+1) + ")");
    


