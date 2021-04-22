let contador = 1
while(contador <= 10)
{
    console.log(`contador = ${contador}`)
    contador++
}

//estrutura for
for(let i = 1; i <= 10; i++){
    console.log(`i = ${i}`)
}

//criando um array na constante
const notas = [6.7, 7.4, 9.8, 8.1, 7.7]
for(let i = 0; i < notas.length; i++){ //let voce só tem acesso a veriável dentro do bloco
       console.log(`nota = ${notas[i]}`)
}

