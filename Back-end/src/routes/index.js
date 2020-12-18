const express = require('express');

const usuariosController = require('../controllers/usuariosController.js');
const disciplinasController=require('../controllers/disciplinasController.js');
const atividadesController=require('../controllers/atividadesController.js');

const routes = express.Router();

// Criar um Usuário
routes.post("/usuario", usuariosController.create);
// Read um Usuario
routes.get("/usuario/:id", usuariosController.show);
// Read Todos os usuarios
routes.get("/usuario", usuariosController.index);
// Update de Usuario
routes.put("/usuario/:id", usuariosController.update);
// Deleta um usuario
routes.delete("/usuario/:id", usuariosController.delete);

//Validar login
routes.get("/usuario/login", usuariosController.show);

// Criar uma Disciplina
routes.post("/disciplinas", disciplinasController.create);
// Read um Disciplina
routes.get("/Disciplinas/:id", disciplinasController.show);

routes.get("/VerDisciplinas/:id", disciplinasController.showdisciplina);

routes.get("/DisciplinasFiltro/:id", disciplinasController.showfiltro);

// Read Todas as Disciplinas
routes.get("/Disciplinas", disciplinasController.index);
// Update de uma Disciplina
routes.put("/Disciplinas/:id", disciplinasController.update);
// Deleta uma Disciplina
routes.delete("/Disciplinas/:id", disciplinasController.delete);

// Criar uma Atividade
routes.post("/criarAtividade", atividadesController.create);
// Read uma Atividade
routes.get("/mostrarAtividade/:id", atividadesController.show);
// Read Todas as Atividades
routes.get("/mostrarAtividade", atividadesController.index);
// Update de uma Atividade
routes.put("/atualizarAtividade/:id", atividadesController.update);
// Deleta uma Atividade
routes.delete("/deletarAtividade/:id", atividadesController.delete);


module.exports = routes;