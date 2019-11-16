// import fs from 'fs' //ES6 Import-Export (não funcionad no Nodejs)
let fs = require('fs') // CommonsJS

console.log("Olá Mundo do Nodejs")

// Criando uma pasta no diretório atual
for (let i = 0; i < 10; i++) {
    fs.rmdirSync(`teste-${i+1}`)
}