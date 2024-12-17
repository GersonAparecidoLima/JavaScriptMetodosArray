//Buscando a lista de todos os botoes
const botoes = document.querySelectorAll('.btn')

//o que cada botão vai fazer
//cada botão eu quero executar uma determinada função
botoes.forEach(btn => btn.addEventListener('click', filtrarLivros))

function filtrarLivros() {
    //Identificando o botão que esta sendo clicado
    const elementoBtn = document.getElementById(this.id)
    const categoria = elementoBtn.value
    let livrosFiltrados = livros.filter(livro => livro.categoria == categoria)
    exibirOsLivrosNaTela(livrosFiltrados)
}