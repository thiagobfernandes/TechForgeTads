// Solicitar entrada do usuário para o dia, mês e ano
let dia = parseInt(prompt("Digite o dia:"));
let mes = parseInt(prompt("Digite o mês:"));
let ano = parseInt(prompt("Digite o ano:"));

// Verificar se o ano é bissexto
let bissexto = (ano % 4 == 0 && ano % 100 != 0) || (ano % 400 == 0);

// Verificar se o mês é válido
if (mes >= 1 && mes <= 12) {
    // Verificar se o dia é válido
    if (mes == 2) { // Fevereiro
        if (bissexto) {
            if (dia >= 1 && dia <= 29) {
                console.log("Data válida");
            } else {
                console.log("Data inválida");
            }
        } else {
            if (dia >= 1 && dia <= 28) {
                console.log("Data válida");
            } else {
                console.log("Data inválida");
            }
        }
    } else if ([4, 6, 9, 11].includes(mes)) { // Meses com 30 dias
        if (dia >= 1 && dia <= 30) {
            console.log("Data válida");
        } else {
            console.log("Data inválida");
        }
    } else { // Meses com 31 dias
        if (dia >= 1 && dia <= 31) {
            console.log("Data válida");
        } else {
            console.log("Data inválida");
        }
    }
} else {
    console.log("Mês inválido");
}
