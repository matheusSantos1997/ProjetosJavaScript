function soma(){
    let soma = 0;
    
    //arguments é um array
    for (i in arguments){
        soma += arguments[i]
    }
    return soma
}
console.log(soma())
console.log(soma(1))
console.log(soma(2.1, 2.2, 1.1))