document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('form-jogo').addEventListener('submit', function(evento) {
        evento.preventDefault();
        let escolha = document.getElementById('escolha').value;
        escolha = parseInt(escolha);

        let computador = Math.random() * 3;

        computador = Math.floor(computador + 1);

        let resulText = '';

        document.getElementById('resultado-jogo').style.display = 'block';

        if(escolha == computador){
            resulText = "Empate";
        } else if((escolha > computador) || (escolha == 1) && (computador == 3)){
            resulText = "Jogador Ganhou";
        } else if((escolha < computador) || (escolha == 3) && (computador == 1)){
            resulText = "Computador Ganhou";
        }

        document.getElementById('resultado-computador').innerText = computador;
        document.getElementById('ganhador').innerText = resulText;
    })
})