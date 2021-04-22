const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for(x in numbers){
    if(x == 5){
        break //break vai interromper o laço e continuar a executar em outro laço
    }
    console.log(`${x} = ${numbers[x]}`)
}

for(y in numbers){
    if(y == 5){
        continue //continue interronpe o laço e vai para proxima repetiçao
    }
    console.log(`${y} = ${numbers[y]}`)
}