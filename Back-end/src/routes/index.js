const express = require('express');

const usuariosController = require('../controllers/usuariosController.js');
const disciplinasController=require('../controllers/disciplinasController.js');
const atividadesController=require('../controllers/atividadesController.js');

const routes = express.Router();

// Criar um Usuário
routes.post("/criar", usuariosController.create);
// Read um Usuario
routes.get("/mostrar/:id", usuariosController.show);
// Read Todos os usuarios
routes.get("/mostrar", usuariosController.index);
// Update de Usuario
routes.put("/atualizar/:id", usuariosController.update);
// Deleta um usuario
routes.delete("/deletar/:id", usuariosController.delete);

// Criar uma Disciplina
routes.post("/criarDisciplina", disciplinasController.create);
// Read um Disciplina
routes.get("/mostrarDisciplina/:id", disciplinasController.show);
// Read Todas as Disciplinas
routes.get("/mostrarDisciplinas", disciplinasController.index);
// Update de uma Disciplina
routes.put("/atualizarDisciplina/:id", disciplinasController.update);
// Deleta uma Disciplina
routes.delete("/deletarDisciplina/:id", disciplinasController.delete);


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