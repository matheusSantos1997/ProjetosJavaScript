// lendo um arquivo .json
const fs = require('fs');

//definindo o caminho do arquivo json
const caminho = __dirname + '/arquivo.json' ;

// sincrono...
//vai fazer a leitura do arquivo com encode utf-8
const conteudo = fs.readFileSync(caminho, 'utf-8');
console.log(conteudo)

//assincrono...
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
     const config = JSON.parse(conteudo);   
     console.log(`${config.db.host}:${config.db.port}`);
});

//forma mais prática de ler um arquivo JSON
const config = require('./arquivo.json');
console.log(config.db);

//lendo uma pasta __dirname busca pelo nome do diretório
fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteudo da pasta...');
    console.log(arquivos);
});
