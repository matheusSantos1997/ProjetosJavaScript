// funçao em JS é First-Class Object (Citizens)
// higher-order function

//criar de forma literal
function fun1(){

}

// armazenar em uma variavel
const fun2 = function(){

}

// armazenar em um array
const array = [function (a, b) {
    
    return a + b
}, fun1, fun2]

console.log(array[0](2, 3)) //somou 2+3

//armazenar em  umatributo de objeto
const obj = {}
obj.falar = function(){
    return 'Opa!'
}
console.log(obj.falar())

