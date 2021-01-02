const express = require("express");

const usuariosController = require("../controllers/usuariosController.js");
const disciplinasController = require("../controllers/disciplinasController.js");
const atividadesController = require("../controllers/atividadesController.js");

const routes = express.Router();

//USUARIOS

routes.post("/usuario", usuariosController.create);

routes.get("/usuario/:id", usuariosController.show);

routes.put("/usuario/:id", usuariosController.update);

routes.delete("/usuario/:id", usuariosController.delete);

routes.get("/perfil/", usuariosController.showPerfil);

routes.put("/editperfil/", usuariosController.EditarPerfil);

routes.get("/usuario/login", usuariosController.show);

//DISCIPLINAS

routes.post("/disciplinas", disciplinasController.create);

routes.get("/Disciplinas/", disciplinasController.show);

routes.get("/VerDisciplinas/:id", disciplinasController.showdisciplina);

routes.put("/Disciplinas/:id", disciplinasController.update);

routes.delete("/Disciplinas/:id", disciplinasController.delete);

//ATIVIDADES

routes.post("/criarAtividade", atividadesController.create);

routes.get("/Atividades/", atividadesController.show);

routes.get("/VerAtividade/:id", atividadesController.showatividade);

routes.put("/Atividade/:id", atividadesController.update);

routes.delete("/Atividade/:id", atividadesController.delete);

module.exports = routes;
