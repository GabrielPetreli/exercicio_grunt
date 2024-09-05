document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('form-sorteador').addEventListener('submit', function(event) {
        event.preventDefault(); // Evita o envio do formulário


        let numeroMaximo = document.getElementById('numero-maximo').value;
        numeroMaximo = parseInt(numeroMaximo);


        if (!isNaN(numeroMaximo) && numeroMaximo > 0) {
            let numeroAleatorio = Math.floor(Math.random() * numeroMaximo) + 1; // Gera um número entre 1 e o valor máximo
            alert(numeroAleatorio);
        } else {
            alert('Por favor, insira um número válido.');
        }
    });
});