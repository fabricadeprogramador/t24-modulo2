// Arquivo que inicializa API 
const Express = require('express')
const BodyParser = require('body-parser')
const Mongoose = require('mongoose')
const Cors = require('cors')
require('./model/Client') // Registro o schema do Client

const ClientRoute = require('./route/ClientRoute')

// Estebelecer conexão com o DB
// Mongoose.connect('mongodb://clientela:clientela123@ds251158.mlab.com:51158/clientela', {useNewUrlParser: true})
Mongoose.connect('mongodb+srv://clientela:Hug4qaiI6APJ4QOc@cluster0-dog4s.mongodb.net/clientela?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true})

// Criando uma instância do Express
const app = new Express()
app.use(BodyParser.json())
app.use(Cors())

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