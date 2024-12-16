document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.botoes button');
    let currentInput = '';

    // Função para atualizar o display
    function updateDisplay() {
        display.value = currentInput;
    }

    // Função para limpar o display
    function clearDisplay() {
        currentInput = '';
        updateDisplay();
    }

    // Função para calcular a expressão
    function calculate() {
        try {
            // Substituindo a divisão por "/" e multiplicação por "*" para cálculo
            currentInput = Function('return ' + currentInput)(); // Usando Function em vez de eval
        } catch {
            currentInput = 'Erro';
        }
        updateDisplay();
    }

    // Adiciona os eventos de clique nos botões
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const value = this.getAttribute('data-value');

            if (value === 'C') {
                clearDisplay();
            } else if (value === '=') {
                calculate();
            } else {
                currentInput += value;
                updateDisplay();
            }
        });
    });
});
