let livros = []
const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
//Fazendo a requesição
// Buscando os livros da API

getBuscarLivrosDaAPI()


async function getBuscarLivrosDaAPI() {
  //Espere uma promessa   
  const res = await fetch(endpointDaAPI)
  //Tranforma em res.json() json
  livros = await res.json()
  //console.log(Livros)
  //console.table(livros)
  livros = aplicarDesconto(livros)
  exibirOsLivrosNaTela(livrosComDesconto)
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