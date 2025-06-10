alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 2;
let chute;
let tentativas = 1;

// Enquanto o chute não for igual ao nmr secreto
while (chute != numeroSecreto) {
    chute = Number(prompt('Escolha um número entre 1 e 10'));
// Se o chute for igual ao número secreto
    if (chute == numeroSecreto) {
        alert(`isso ai descobriu o número ${numeroSecreto} com ${tentativas} tentativas.`);     
    } else if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
    } else {
            alert(`O número secreto é maior que ${chute}`);    
        }  
        tentativas++;


    }

// testando o meu aprendizado com git e githubbbbb
//teste fazer alterações no git pelo vs code web
//testando alterações com git e github vs code app
//onlinde total