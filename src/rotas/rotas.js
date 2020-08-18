const express = require('express');
const rotas = express.Router();
const controller = require('../controles/page-controle');
const { Router } = require('express');


rotas.get("/", controller.pageLanding)

rotas.get("/study", controller.pageStudy)

rotas.get("/give-classes", controller.pageGiveClasses)

rotas.post("/save-classes", controller.saveClasses)

module.exports = rotas