const express = require("express");

const usuariosController = require("../controllers/usuariosController.js");
const disciplinasController = require("../controllers/disciplinasController.js");
const atividadesController = require("../controllers/atividadesController.js");
const authController = require("../controllers/authController");

const routes = express.Router();

//USUARIOS

routes.post("/usuario", usuariosController.create);

routes.get(
  "/usuario/:id",
  authController.validaUsuario,
  usuariosController.show
);

routes.put(
  "/usuario/:id",
  authController.validaUsuario,
  usuariosController.update
);

routes.delete(
  "/usuario/:id",
  authController.validaUsuario,
  usuariosController.delete
);

routes.get(
  "/perfil/",
  authController.validaUsuario,
  usuariosController.showPerfil
);

routes.put(
  "/editperfil/:id",
  authController.validaUsuario,
  usuariosController.EditarPerfil
);

routes.post("/usuario/login", usuariosController.show);

//DISCIPLINAS

routes.post(
  "/disciplinas",
  authController.validaUsuario,
  disciplinasController.create
);

routes.get(
  "/Disciplinas/",
  authController.validaUsuario,
  disciplinasController.show
);

routes.get(
  "/VerDisciplinas/:id",
  authController.validaUsuario,
  disciplinasController.showdisciplina
);

routes.put(
  "/Disciplinas/:id",
  authController.validaUsuario,
  disciplinasController.update
);

routes.delete(
  "/Disciplinas/:id",
  authController.validaUsuario,
  disciplinasController.delete
);

//ATIVIDADES

routes.post(
  "/criarAtividade",
  authController.validaUsuario,
  atividadesController.create
);

routes.get(
  "/Atividades/",
  authController.validaUsuario,
  atividadesController.show
);

routes.get(
  "/VerAtividade/:id",
  authController.validaUsuario,
  atividadesController.showatividade
);

routes.put(
  "/Atividade/:id",
  authController.validaUsuario,
  atividadesController.update
);

routes.delete(
  "/Atividade/:id",
  authController.validaUsuario,
  atividadesController.delete
);

module.exports = routes;
