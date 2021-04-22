const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() //remove o elemento da ultima posiçao do array
console.log(pilotos)

pilotos.push('Verstappen') //push adiciona um novo elemento na ultima posiçao do array
console.log(pilotos)

pilotos.shift() //remove o elemento da primeira posiçao
console.log(pilotos)

pilotos.unshift('Hamilton')
console.log(pilotos)

//splice pode adicionar e remover elementos 

// adicionar 
pilotos.splice(2, 0, 'Bottas','Massa') //na possiçao 2 nao remover nenhum elemento e adicionar mais dois
console.log(pilotos)

//remover
pilotos.splice(3, 1) //removendo massa
console.log(pilotos)