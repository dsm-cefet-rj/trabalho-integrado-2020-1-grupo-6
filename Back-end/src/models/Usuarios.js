const mongoose = require("mongoose");
const normalize = require("normalize-mongoose");
const joi = require("@hapi/joi");
const disciplinas = require("../models/Disciplinas.js");
const atividades = require("../models/Atividades.js");



const usuariosSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
    maxLength: 30,
  },
  usuario: {
    type: String,
    required: true,
    minLength: 6,
    maxLength: 12,
  },
  curso: {
    type: String,
    required: true,
    maxLength: 30,
  },
  senha: {
    type: String,
    required: true,
    minLength: 6,
  },

});



function validarUsuario(usuario) {
  const schema = joi.object({
    nome: joi.string().alphanum().required(),
    usuario: joi.string().required(),
    curso: joi.string().required(),
    senha: joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
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



module.exports = mongoose.model("Usuarios", usuariosSchema);
