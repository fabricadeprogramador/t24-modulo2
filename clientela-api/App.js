// Arquivo que inicializa API 
const Express = require('express')
const BodyParser = require('body-parser')
const Mongoose = require('mongoose')

// Estebelecer conexão com o DB
// Mongoose.connect('mongodb://clientela:Hug4qaiI6APJ4QOc@cluster0-shard-00-00-dog4s.mongodb.net:27017/clientela', {useNewUrlParser: true})
Mongoose.connect('mongodb+srv://clientela:Hug4qaiI6APJ4QOc@cluster0-dog4s.mongodb.net/clientela?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true})

// Criando uma instância do Express
const app = new Express()
app.use(BodyParser.json())

app.get('/', (req, res) => {
    res.json({
        name: "API Clientela",
        version: "v1.0.0"
    })
})

// Rotas do para o cliente
app.get('/clients', (req, res) => { // Rota para listagem de clientes cadastrados
    res.json([
        {
            name: "Jão da Silva",
            email: "jao@gmail.com"
        },
        {
            name: "Maria da Silva",
            email: "mah@gmail.com"
        }
    ])
})

app.post('/clients', (req, res) => { // Rota para cadastro de cliente
    res.send("Cadastrado com sucessoooooo!")
    console.log(req.body)
    // Mongo, cadastra o req.body
})

// "Rodar" a API
app.listen(3000, () => {
    console.log("API pronta e rodando na porta 3000")
})