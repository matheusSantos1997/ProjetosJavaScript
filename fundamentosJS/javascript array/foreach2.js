//implementando um prorpio foreach
Array.prototype.forEach2 = function(callback) {
    //este laço vai percorrer do primeiro até o ultimo elemento
    for(let i = 0; i < this.length; i++)
    {
// passando o valor atual, indice atual e o array completo
        callback(this[i], i, this)
    }
}
const aprovados = ['Agatha', 'Maria', 'Kleber', 'Raquel']

aprovados.forEach2(function(nome, indice, array){
    console.log(`${indice + 1}) ${nome}`)
    console.log(array)
})