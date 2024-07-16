//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Jogo do número secreto';
// innerHTML - dentro do HTML

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Escolha o numero de 1 a 10';
let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

exibirMensagemInicial();

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto.');
    exibirTextoNaTela('p', 'Escolha o numero de 1 a 10.');
}



function verificarChute() {
    let chute = document.querySelector('input').value;
   
   if (chute == numeroSecreto) {

      exibirTextoNaTela('h1','Acertou!');
      let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
      let mensagemTentativas = `Voce acertou o numero secreto com ${tentativas} ${palavraTentativa}`;
      exibirTextoNaTela('p', mensagemTentativas);
      document.getElementById('reiniciar').removeAttribute('disabled');

   } else {

       if (chute > numeroSecreto){
           exibirTextoNaTela('p', 'O numero Secreto é menor');
       } else {
           exibirTextoNaTela('p', 'O numero Secreto é maior');
       }
       tentativas ++ ;
       limparCampo();
   }

}

function gerarNumeroAleatorio(){
    let numeroEscolido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

if (quantidadeDeElementosNaLista == numeroEscolido) {
    listaDeNumerosSorteados == [];
}

    if (listaDeNumerosSorteados.includes(numeroEscolido)){
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolido);
        console.log(listaDeNumerosSorteados)
        return numeroEscolido;
    }
}
 
function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}