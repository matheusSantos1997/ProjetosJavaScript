const aprovados = ['Agatha', 'Maria', 'Kleber', 'Raquel']

aprovados.forEach(function(nome, indice){
    console.log(`${indice + 1}) ${nome}`)
})

//exemplo com arrow Function
aprovados.forEach(nome => console.log(nome))

//exemplo de armazenar funçao em uma variavel
const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)