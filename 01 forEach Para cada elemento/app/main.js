let livros = []
const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
//Fazendo a requesição
// Buscando os livros da API

getBuscarLivrosDaAPI()
const elementoParaInserirLivros = document.getElementById('livros')


async function getBuscarLivrosDaAPI() {
  //Espere uma promessa   
  const res = await fetch(endpointDaAPI)
  //Tranforma em res.json() json
  livros = await res.json()
  //console.log(Livros)
  console.table(livros)
  exibirOsLivrosNaTela(livros)
}

function exibirOsLivrosNaTela(listaDeLivros) {
  listaDeLivros.forEach(livro => {
    //${livro.imagem}
    elementoParaInserirLivros.innerHTML += `
     <div class="livro">
      <img class="livro__imagens" src="${livro.imagem}" alt="${livro.alt}" />
      <h2 class="livro__titulo"> ${livro.titulo} </h2>
      <p class="livro__descricao">${livro.autor}</p>
      <p class="livro__preco" id="preco">R$${livro.preco}</p>
      <div class="tags"> <span class="tag">${livro.categoria}</span> </div>
    </div>
      `
  })
}


/**
 
 let livros = ['js','Pyton','Go']

for(let i=0; i<livros.length; i++){
    console.log(livros)
}

Tem a mesmo efeito

livros.forEach( livros => {
console.log(livros)
})

 */