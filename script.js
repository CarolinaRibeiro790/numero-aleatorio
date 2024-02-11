const numAleatorio = Math.floor(Math.random() * 100) + 1;
let maxTentativas = 5;
let tentativas = 0;

function verificarNum() {

    tentativas++;

    let numero = parseInt(document.getElementById('num').value);
    
    if (isNaN(numero) || numero < 1 || numero > 100) {
        document.querySelector(".res").innerHTML = "Por favor, digite um número válido de 1 a 100";
    } else if (numero === numAleatorio) {
        document.querySelector(".res").innerHTML = `Parabéns você acertou! \n O número era ${numero}.`;
    } else if (numero < numAleatorio) {
        document.querySelector(".res").innerHTML = `Tente um número maior. \n Tentativas restantes: ${maxTentativas - tentativas}`;
    } else {
        document.querySelector(".res").innerHTML = `Tente um número menor. \n Tentativas restantes: ${maxTentativas - tentativas}`;
    } if (tentativas >= maxTentativas) {
        document.querySelector(".res").innerHTML = `Que pena suas chances acabaram. \n O número era ${numAleatorio}.`;
        document.getElementById('btn').disabled = true;
    } num.value = '' //apaga o numero do input que foi digitado
      num.focus() // já seleciona o input novamente para digitar o próximo n°

}