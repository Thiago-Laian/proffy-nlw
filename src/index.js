const express = require('express');
const app = express();

app.use(express.static("public"))

.get("/", (req, res)=>{
    return res.render("index.html")
})

.get("/study", (req, res)=>{
    return res.render("study.html")
})

.get("/give-classes", (req, res)=>{
    return res.render("give-classes.html")
})

app.listen(3000, ()=>{console.log("Servidor rodando")})