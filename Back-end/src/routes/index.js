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

//ver perfil
routes.get("/perfil/:id", usuariosController.showPerfil);
routes.put("/editperfil/:id",usuariosController.EditarPerfil);


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
routes.get("/Atividade/:id", atividadesController.show);

routes.get("/VerAtividade/:id", atividadesController.showatividade);

routes.get("/AtividadeFiltro/:id", atividadesController.showfiltro);
// Filtra tela atividades
routes.get("/FiltroAtividades/:id", atividadesController.showfiltroAtividades);
// Read Todas as Atividades
routes.get("/mostrarAtividades", atividadesController.index);
// Update de uma Atividade
routes.put("/Atividade/:id", atividadesController.update);
// Deleta uma Atividade
routes.delete("/Atividade/:id", atividadesController.delete);


module.exports = routes;