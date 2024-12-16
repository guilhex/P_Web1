document.addEventListener('DOMContentLoaded', function () {
    // Carrinho de Compras
    let carrinho = [];
    const carrinhoElement = document.getElementById('caixa-carrinho');
    const itensCarrinhoElement = document.getElementById('itens-carrinho');
    const totalCarrinhoElement = document.getElementById('total-carrinho');

    // Função para atualizar o carrinho
    function atualizarCarrinho() {
        let total = 0;
        carrinho.forEach(item => total += item.preco); // Calcula o total
        itensCarrinhoElement.textContent = `${carrinho.length} itens`; // Exibe o número de itens
        totalCarrinhoElement.textContent = `R$ ${total.toFixed(2)}`; // Exibe o total formatado
    }

    // Adicionar item ao carrinho
    const botoesAdicionar = document.querySelectorAll('.adicionar');
    botoesAdicionar.forEach((botao, index) => {
        botao.addEventListener('click', function () {
            const produto = document.querySelectorAll('.produto')[index];
            const preco = parseFloat(produto.dataset.preco); // Obtém o preço do produto
            carrinho.push({ nome: produto.querySelector('h3').textContent, preco: preco }); // Adiciona o produto ao carrinho
            atualizarCarrinho(); // Atualiza o carrinho
            alert(`Adicionado: ${produto.querySelector('h3').textContent}`); // Alerta de adição
        });
    });

    // Finalizar compra (função simulada)
    const finalizarCompraButton = document.getElementById('finalizar-compra');
    finalizarCompraButton.addEventListener('click', function () {
        if (carrinho.length > 0) {
            alert(`Compra finalizada com sucesso!`);
            carrinho = []; // Limpa o carrinho após finalizar
            atualizarCarrinho(); // Atualiza o carrinho
        } else {
            alert(`Carrinho vazio! Adicione produtos ao carrinho.`);
        }
    });
});
