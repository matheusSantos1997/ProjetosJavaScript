const nums = [1, 2, 3, 4, 5]

// map é o for com propósito
let resultado = nums.map(function(e){
     return e * 2 //vai retornar o dobro
})
console.log(resultado)

//funçao que recebe o elemento
const soma10 = e => e + 10
const triplo = e => e * 3

//convertendo  elemento para real e adicionando duas casas decimais com toFixed
//e substituindo o . por , com o método replace
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)