const imprimirResultado = function (nota){
    //floor vai arredondar para baixo
    //random vai arredondar para cima
    switch(Math.floor(nota)) 
    {
         //caso for 10 ou 9
          case 10:
          case 9:
              console.log('Quadro de Honra')
              break
          case 8: case 7:
              console.log('Aprovado')
              break
          case 6: case 5: case 4:
              console.log('Recuperação')
              break
          case 3: case 2: case 1: case 0:
              console.log('Reprovado')
              break
          default:
              console.log('Nota inválida!')
    }
}
imprimirResultado(0)