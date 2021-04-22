const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

for (let i in notas){
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Fulano',
    sobrenome: 'ggg',
    idade: 37,
    peso: 70
}

for(let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}