// Importando o express
const express = require('express');
const app = express();

// Configuração nunjucks
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: app,
    noCache: true,
})

// Arquivos staticos
app.use(express.static("public"))

// Rotas
const rotas = require('./rotas/rotas')

app.get("/", rotas)

.get("/study", rotas)

.get("/give-classes", rotas)

app.listen(3000, ()=>{console.log("Servidor rodando")})