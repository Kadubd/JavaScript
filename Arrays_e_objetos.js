// 1 - Definindo o array de objetos para armazenar os livros no estoque
const estoqueLivros = [];

// 2 - Função para adicionar um livro ao estoque
function adicionarLivro(titulo, autor, quantidade) {
    // Verifica se o livro já existe no estoque
    const livroExistente = estoqueLivros.find(livro => livro.titulo === titulo);
    
    if (livroExistente) {
        console.log(`O livro "${titulo}" já está no estoque.`);
    } else {
        // Adiciona o livro ao estoque
        estoqueLivros.push({ titulo, autor, quantidade });
        console.log(`O livro "${titulo}" foi adicionado ao estoque.`);
    }
}

// 3 - Função para remover um livro do estoque pelo título
function removerLivro(titulo) {
    const index = estoqueLivros.findIndex(livro => livro.titulo === titulo);
    
    if (index !== -1) {
        estoqueLivros.splice(index, 1);
        console.log(`O livro "${titulo}" foi removido do estoque.`);
    } else {
        console.log(`O livro "${titulo}" não foi encontrado no estoque.`);
    }
}

// 4 - Função para atualizar a quantidade de um livro no estoque
function atualizarQuantidade(titulo, novaQuantidade) {
    const livro = estoqueLivros.find(livro => livro.titulo === titulo);
    
    if (livro) {
        livro.quantidade = novaQuantidade;
        console.log(`A quantidade do livro "${titulo}" foi atualizada para ${novaQuantidade}.`);
    } else {
        console.log(`O livro "${titulo}" não foi encontrado no estoque.`);
    }
}

// 5 - Função para listar todos os livros no estoque
function listarLivros() {
    if (estoqueLivros.length > 0) {
        console.log("Livros disponíveis no estoque:");
        estoqueLivros.forEach(livro => {
            console.log(`Título: ${livro.titulo}, Autor: ${livro.autor}, Quantidade: ${livro.quantidade}`);
        });
    } else {
        console.log("Nenhum livro disponível no estoque.");
    }
}

// Testes

adicionarLivro('Dom Casmurro', 'Machado de Assis', 5);
adicionarLivro('1984', 'George Orwell', 10);
adicionarLivro('O Senhor dos Anéis', 'J.R.R. Tolkien', 3);

listarLivros();

atualizarQuantidade('1984', 15);
removerLivro('O Senhor dos Anéis');

listarLivros();
