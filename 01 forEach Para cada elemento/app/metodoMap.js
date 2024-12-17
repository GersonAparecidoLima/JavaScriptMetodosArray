function aplicarDesconto(livros) {
    const desconto = 0.3
    livrosComDesconto = livros.map(livro => {
        //... os três pontos faz uma cópia do array chamado livor
        //depois da cópia vamos altera apenas o indice preco
        return { ...livro, preco: livro.preco - (livro.preco * desconto) }
    })
    return livrosComDesconto
}