const valor = 'Global'

function minhaFuncao(){
    console.log(valor)
}

function exec(){
    const local = 'local'
    minhaFuncao()
}
exec()