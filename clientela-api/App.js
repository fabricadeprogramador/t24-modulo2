// Arquivo que inicializa API 
const Express = require('express')
const BodyParser = require('body-parser')
const Mongoose = require('mongoose')
require('./model/Client') // Registro o schema do Client

const ClientRoute = require('./route/ClientRoute')


// Estebelecer conexão com o DB
// Mongoose.connect('mongodb://clientela:Hug4qaiI6APJ4QOc@cluster0-shard-00-00-dog4s.mongodb.net:27017/clientela', {useNewUrlParser: true})
Mongoose.connect('mongodb+srv://clientela:Hug4qaiI6APJ4QOc@cluster0-dog4s.mongodb.net/clientela?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true})

// Criando uma instância do Express
const app = new Express()
app.use(BodyParser.json())

new ClientRoute(app)

app.get('/', (req, res) => {
    res.json({
        name: "API Clientela",
        version: "v1.0.0"
    })
})

// "Rodar" a API
app.listen(3000, () => {
    console.log("API pronta e rodando na porta 3000")
})