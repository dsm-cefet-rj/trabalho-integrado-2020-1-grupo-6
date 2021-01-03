const mongoose = require("mongoose");
const normalize = require("normalize-mongoose");
const joi = require("@hapi/joi");
const {
  DisciplinasModel: disciplinas,
  validarDisciplinas,
} = require("../models/Disciplinas.js");

const {
  AtividadesModel: atividades,
  validarAtividades,
} = require("../models/Atividades.js");

const usuariosSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
    maxLength: 30,
    minLength: 3,
  },
  usuario: {
    type: String,
    required: true,
    minLength: 8,
    maxLength: 20,
  },
  curso: {
    type: String,
    required: true,
    maxLength: 30,
    minLength: 3,
  },
  senha: {
    type: String,
    required: true,
    minLength: 8,
  },
});

function validarUsuario(usuario) {
  const schema = joi.object({
    nome: joi.string().max(30).min(3).required().messages({
      "string.empty": `O nome não pode ficar vazio`,
      "string.min": `O nome precisa ter no mínimo {#limit} caracteres`,
      "string.max": `O nome precisa ter no máximo {#limit} caracteres`,
    }),
    usuario: joi.string().min(8).max(20).required().messages({
      "string.empty": `O nome de usuário não pode ficar vazio`,
      "string.min": `O nome de usuário precisa ter no mínimo {#limit} caracteres`,
      "string.max": `O nome de usuário precisa ter no máximo {#limit} caracteres`,
    }),
    curso: joi.string().max(30).min(3).required().messages({
      "string.empty": `O nome do curso não pode ficar vazio`,
      "string.min": `O nome do curso precisa ter no mínimo {#limit} caracteres`,
      "string.max": `O nome do curso precisa ter no máximo {#limit} caracteres`,
    }),
    senha: joi
      .string()
      .min(8)
      .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")) // senha precisa ter pelo menos 1 letra e um número ou caracter especial
      .messages({
        "string.empty": `A senha não pode ficar vazia`,
        "string.pattern.base": `A senha precisa ter pelo menos 1 letra e um número ou caracter especial `,
        "string.min": `A senha precisa ter no mínimo {#limit} caracteres`,
      }),
    confirma_senha: joi.ref("senha"),
  });

  return schema.validate(usuario);
}

usuariosSchema.plugin(normalize);

usuariosSchema.post(
  "findOneAndDelete",
  { document: false, query: true },
  function (obj) {
    console.log(obj);
    disciplinas.deleteMany({ idUsuario: obj._id }).exec();
    atividades.deleteMany({ idUsuario: obj._id }).exec();
  }
);

const UsuariosModel = mongoose.model("Usuarios", usuariosSchema);

module.exports = { UsuariosModel, validarUsuario };
