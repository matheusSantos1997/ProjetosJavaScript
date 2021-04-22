const fs = require('fs');

//criou um objeto chamado produto
const produto = {
     nome: 'SmartPhone',
     preco: '1200.99',
     desconto: 0.15
}
//transformando objeto em texto JSON
fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => {
    //se o valor de erro estiver nulo gera o arquivo
    console.log(err || 'Arquivo gerado com sucesso!');
});