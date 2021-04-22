const bodyParser = require('body-parser') //importando o body-parser pra permitir requisiçoes no corpo da pagina
const express = require('express') //importando o express
const app = express() //instanciando o express

//criando middle
app.use(express.static('.')) //diz que dentro da pasta atual no qual o arquivo server.js sirva os "arquivos estáticos" no caso os .html
app.use(bodyParser.urlencoded({ extended: true })) //vai ler os dados do arquivo json e transformar em objetos
app.use(bodyParser.json()) //caso se vier um json dentro do corpo da requisiçao

/*
  //quando vier uma requisiçao do tipo get no /teste vai retornar uma funçao com uma resposta "OK"
   app.get('/teste', (req, res) => res.send('OK'))
*/

const multer = require('multer') //importando o multer que vai insterpretar o formulário que vier o arquivo de upload

//diskStorage que vai receber um objeto que serve para configurar e 
//personalizar nome do repositório onde vai ser salvo o arquivo tanto como o nome no arquivo em si
const storage = multer.diskStorage({
      destination: function (req, file, callback) {
           callback(null, './upload') //funçao criada chamada callback onde fica a pasta de destino
      },
      //funçao chamada no momento qem que for escolher o nome do arquivo
      filename: function (req, file, callback) {
          callback(null, `${Date.now()}_${file.originalname}`)
      }
})

//vai definir um nome do arquivo que vai vir na requisiçao
const upload = multer({ storage }).single('arquivo')

app.post('/upload', (req, res) =>{
   upload(req, res, err => {
       if (err){
          return res.end('Ocorreu um erro!')
       }
       else
       {
          res.end('concluído com sucesso!')
       }
   })
})

app.post('/formulario', (req, res) => {
     res.send({
         ...req.body, 
         id: 1
     })
})

app.get('/parOuImpar', (req, res) => {
    // req.body
    // req.query
    // req.params
    const par = parseInt(req.query.numero) % 2 === 0
    res.send({
       resultado: par ? 'par' : 'impar'
    })
})

//app.get('/teste', (req, res) => res.send('conectou-se com o servidor!'))
app.listen(8085, () => console.log('executando!'))