//tipo let permite reatribuir a variavel sem precisar declarar let novamente

//forma nao recomendada de utilizar um array
let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

//forma mais recomendada de declarar um array
aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Paulo'
aprovados.push('Ana') //metodo push adiciona novos elementos no array
console.log(aprovados.length)

aprovados[9] = 'Rafael'
console.log(aprovados.length)

console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort() //vai organizar o array em ordem crescente
console.log(aprovados)
