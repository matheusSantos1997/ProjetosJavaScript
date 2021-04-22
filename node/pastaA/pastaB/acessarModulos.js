const moduloA = require('../../moduloA')
console.log(moduloA.ola)

//acessando o módulo no node_modules
const saudacao = require('saudacao');
console.log(saudacao.ola);

//acessando módulo interno do node http
const http = require('http')
http.createServer((req, res) => {
    res.write('Bom dia filho!');
    res.end()
}).listen(8080) 