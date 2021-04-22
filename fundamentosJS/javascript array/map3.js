Array.prototype.map2 = function(callback)
{
    //tem que gerar um novo array vazio
    const newArray = []
    for (let i = 0; i < this.length; i++) 
    {
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "kit de lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}',
]
//retornar um array apenas com os preço
const paraObjeto = json => JSON.parse(json) //convertendo objeto para JSON
const apenasPreco = produto => produto.preco // pegando o preço

const resultado = carrinho.map2(paraObjeto).map2(apenasPreco) //mapeando os objetos
console.log(resultado) //mostrando o resultado na tela