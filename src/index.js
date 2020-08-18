// Importando o express
const express = require('express');
const app = express();

// Configuração nunjucks
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: app,
    noCache: true,
})

//
app.use(express.urlencoded({ extended: true }))

// Arquivos staticos
app.use(express.static("public"))

// Rotas
const rotas = require('./rotas/rotas')

app.get("/", rotas)

app.get("/study", rotas)

app.get("/give-classes", rotas)

app.post("/save-classes", rotas)

app.listen(3000, ()=>{console.log("Servidor rodando")})