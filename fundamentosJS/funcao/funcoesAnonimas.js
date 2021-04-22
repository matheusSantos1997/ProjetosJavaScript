const soma = function(x, y){
    return x + y    
}

const imprimirResultado = function (a, b, operacao = soma){
    console.log(operacao(a, b))
}

imprimirResultado(2,2)
imprimirResultado(4, 2, function(x, y){
    return x - y
})