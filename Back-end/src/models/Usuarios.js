const mongoose = require("mongoose");
const normalize = require("normalize-mongoose");
const joi = require("@hapi/joi");

const usuariosSchema = mongoose.Schema({
  nome: {
    type: String,
    required: true,
    unique: false,
  },
  usuario: {
    type: String,
    required: true,
    unique: true,
  },
  curso: {
    type: String,
    required: true,
    unique: false,
  },
  senha: {
    type: String,
    required: true,
    unique: false,
  },
  confirma_senha: {
    type: String,
    required: true,
  },
});

function validarUsuario(usuario) {
  const schema = joi.object({
    nome: joi.string().alphanum().required().max(30),
    usuario: joi.string().required().min(3).max(12),
    curso: joi.string().required().max(30),
    senha: joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
    confirma_senha: joi.ref("senha"),
  });

  return schema.validate(usuario);
}

usuariosSchema.plugin(normalize);

module.exports = mongoose.model("Usuarios", usuariosSchema);
