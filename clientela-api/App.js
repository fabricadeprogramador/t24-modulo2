// Arquivo que inicializa API 
const Express = require('express')

// Criando uma instância do Express
const app = new Express()

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