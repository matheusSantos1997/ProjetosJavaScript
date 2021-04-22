const porta = 3003;

const express = require('express');

const app = express();


app.get('/produtos', (req, res, next) => {
    
    //envviando como reposta um objeto com os seguintes atributos
    res.send({ nome: 'Notebook', preco: 123.45 }); //vai converter para json
})

app.listen(porta, () => {
console.log(`Servidor executando na porta: ${porta}`)
});