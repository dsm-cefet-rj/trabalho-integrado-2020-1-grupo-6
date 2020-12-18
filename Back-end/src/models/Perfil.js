const mongoose = require("mongoose");
const normalize = require("normalize-mongoose");

const PerfilSchema = mongoose.Schema({
  nome: {
    type: String,
    required: true,
    unique: true,
  },
  dataEntrega: {
    type: String,
    required: true,
    unique: true,
  },
  pontuacaoMax: {
    type: String,
    required: true,
    unique: false,
  },
  status: {
    type: String,
    required: true,
    unique: false,
  },
  tipo: {
    type: String,
    required: true,
    unique: false,
  },
  descricao: {
    type: String,
    required: true,
    unique: false,
  },
  notaFinal: {
    type: String,
    required: true,
    unique: false,
  },
  arquivo: {
    type: String,
    required: true,
    unique: false,
  },
  idDisciplina: {
    type: mongoose.Types.ObjectId,
    ref: "Disciplinas",
    required: true,
  },
  idUsuario: {
    type: mongoose.Types.ObjectId,
    ref: "Usuarios",
    required: true,
  },
});

PerfilSchema.plugin(normalize);

module.exports = mongoose.model("Perfis", Perfil);
