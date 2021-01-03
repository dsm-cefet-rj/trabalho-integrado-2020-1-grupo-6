const mongoose = require("mongoose");
const normalize = require("normalize-mongoose");
const atividadesSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
    maxLength: 30,
  },
  dataEntrega: {
    type: String,
    required: true,
    maxLength: 10,
  },
  pontuacaoMax: {
    type: String,
    required: true,
    maxLength: 4,
  },
  status: {
    type: String,
    required: true,
  },
  tipo: {
    type: String,
    required: true,
  },
  descricao: {
    type: String,
    maxLength: 50,
  },
  notaFinal: {
    type: String,
    maxLength: 4,
  },
  arquivo: {
    type: String,
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

function validarAtividades(atividade) {
  const schema = joi.object({
    nome: joi.string().min(2).max(30).required(),
    dataEntrega: joi.string().min(5).max(14).required(),
    pontuacaoMax: joi.string().required().pattern(new RegExp("[^a-z]{1,4}")),
    descricao: joi.string(),
    notaFinal: joi.string(),
    arquivo: joi.string(),
  });

  return schema.validate(atividade);
}

atividadesSchema.plugin(normalize);

module.exports = mongoose.model("Atividades", atividadesSchema, "atividades");
