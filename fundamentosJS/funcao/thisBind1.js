const pessoa = {
    //saudacao objeto criado
    saudacao: 'Bom dia',
    falar(){
        console.log(this.saudacao)
    }
}
pessoa.falar()
const falar = pessoa.falar
falar() // gera conflito entre paradigma funcional e Orientado a objeto

//bind permite chamadas multiplas da funçao no this
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()