const canvas = document.getElementById('gameCanvas');
const context = canvas.getContext('2d');

// Variáveis do jogo
let snake = [{ x: 200, y: 200 }];
let food = { x: 100, y: 100 };
let direction = 'RIGHT';
const unit = 10; // Tamanho do bloco da cobrinha
let score = 0; // Inicializa o score
const scoreElement = document.getElementById('scoreValue'); // Elemento que exibirá o score

// Função para desenhar os elementos no canvas
function draw() {
    // Limpar o canvas
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Desenhar a cobrinha
    for (let i = 0; i < snake.length; i++) {
        context.fillStyle = 'green';
        context.fillRect(snake[i].x, snake[i].y, unit, unit);
    }

    // Desenhar a comida
    context.fillStyle = 'red';
    context.fillRect(food.x, food.y, unit, unit);

    // Atualizar a posição da cobrinha
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    // Lógica para mover a cobrinha
    if (direction === 'LEFT') snakeX -= unit;
    if (direction === 'UP') snakeY -= unit;
    if (direction === 'RIGHT') snakeX += unit;
    if (direction === 'DOWN') snakeY += unit;

    // Verificar se a cobrinha comeu a comida
    if (snakeX === food.x && snakeY === food.y) {
        // Aumenta o score e gera nova posição para a comida
        score += 10; 
        scoreElement.textContent = score; // Atualiza o score no DOM
        food = {
            x: Math.floor(Math.random() * (canvas.width / unit)) * unit,
            y: Math.floor(Math.random() * (canvas.height / unit)) * unit,
        };
    } else {
        // Remove a cauda
        snake.pop();
    }

    // Adiciona a nova cabeça da cobrinha
    const newHead = {
        x: snakeX,
        y: snakeY,
    };

    // Fim de jogo: colisão com as bordas ou com o corpo da cobrinha
    if (
        snakeX < 0 || 
        snakeY < 0 || 
        snakeX >= canvas.width || 
        snakeY >= canvas.height || 
        collision(newHead, snake)
    ) {
        clearInterval(game); // Para o jogo
        alert('Game Over');
    }

    // Adiciona a nova cabeça à cobrinha
    snake.unshift(newHead);
}

// Função para verificar colisão com o próprio corpo da cobrinha
function collision(head, array) {
    for (let i = 1; i < array.length; i++) {
        if (head.x === array[i].x && head.y === array[i].y) {
            return true;
        }
    }
    return false;
}

// Função para mudar a direção da cobrinha com as teclas de seta
document.addEventListener('keydown', changeDirection);
function changeDirection(event) {
    const key = event.keyCode;
    if (key === 37 && direction !== 'RIGHT') direction = 'LEFT';
    if (key === 38 && direction !== 'DOWN') direction = 'UP';
    if (key === 39 && direction !== 'LEFT') direction = 'RIGHT';
    if (key === 40 && direction !== 'UP') direction = 'DOWN';
}

// Inicia o jogo
const game = setInterval(draw, 100); // Atualiza o canvas a cada 100ms
