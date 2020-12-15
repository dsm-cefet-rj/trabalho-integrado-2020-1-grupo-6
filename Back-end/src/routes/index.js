const express = require('express');

const usuariosController = require('../controllers/usuariosController.js');
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

module.exports = routes;