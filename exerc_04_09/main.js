const visor = document.querySelector('input[type=tel]');
const listaDeBotoes = document.querySelectorAll('input[type=button]');

for(let i = 0; i < listaDeBotoes.length; i++) {
    const botao = listaDeBotoes[i];
    const numero = botao.value;

    botao.onclick = function () {
        visor.value = visor.value + numero;
    }
}