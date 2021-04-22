function getInteiroAleatorioEntre(min, max){ //funçao para gerar numero aleatorio
    const valor = Math.random() * (max - min) + min //valor de intervalo entre 0 = min e 1 = max
    return Math.floor(valor) //arredondando para baixo

}
let opcao = 0;

while(opcao != -1)
{
    opcao = getInteiroAleatorioEntre(-1, 10) //vai gerar valores aleatório entre -1 e 10
    console.log(`Opçao escolhida foi ${opcao}.`)
}

console.log('até a próxima!')