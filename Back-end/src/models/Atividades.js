const mongoose = require("mongoose");
const normalize = require("normalize-mongoose");
const joi = require("joi");
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
    maxLength: 500,
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
    nome: joi.string().min(2).max(30).required().messages({
      "string.empty": `O nome não pode ficar vazio`,
      "string.min": `O nome precisa ter no mínimo {#limit} caracteres`,
      "string.max": `O nome precisa ter no máximo {#limit} caracteres`,
    }),
    dataEntrega: joi.string().min(5).max(10).required().messages({
      "string.empty": `A data de entrega não pode ficar vazia`,
      "string.min": `A data de entrega precisa ter no mínimo {#limit} caracteres`,
      "string.max": `A data de entrega precisa ter no máximo {#limit} caracteres`,
    }),
    status: joi.required().valid("Aguardando", "Concluída"),
    tipo: joi.required().valid("Prova", "Trabalho"),
    pontuacaoMax: joi
      .string()
      .max(4)
      .required()
      .pattern(new RegExp("[^a-z]{1,4}")) //não pode espaço e não pode letras
      .messages({
        "string.empty": `A pontuação máxima não pode ficar vazia`,
        "string.pattern.base": `A pontuação máxima não pode conter letras`,
        "string.max": `A pontuação máxima precisa ter no máximo {#limit} caracteres`,
      }),
    descricao: joi.string().max(500).allow("").messages({
      "string.max": `A descrição precisa ter no máximo {#limit} caracteres`,
    }),
    notaFinal: joi
      .string()
      .max(4)
      .pattern(new RegExp("[^a-z]{1,4}"))
      .allow("")
      .messages({
        "string.max": `A nota final precisa ter no máximo {#limit} caracteres`,
        "string.pattern.base": `A nota final não pode conter letras`,
      }),
    arquivo: joi.string().allow(""),
    idDisciplina: joi.required(),
    idUsuario: joi.required(),
  });

  return schema.validate(atividade);
}
[];

atividadesSchema.plugin(normalize);
const AtividadesModel = mongoose.model(
  "Atividades",
  atividadesSchema,
  "atividades"
);

module.exports = { AtividadesModel, validarAtividades };
