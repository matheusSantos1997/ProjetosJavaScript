// console.log(global)

//Object.freeze vai congelar o objeto e estando congelado nao consegue mudar o objeto
global.MinhaApp = Object.freeze({ //MinhaApp nome do atributo criado dentro do objeto
    
    //funçao criada
    saudacao()
    {
       return 'Estou em todos os lugares!'
    },
    nome: 'Sistema legal!'
})