const mongoose = require("mongoose");
const normalize = require("normalize-mongoose");
const {
  AtividadesModel: atividades,
  validarAtividades,
} = require("../models/Atividades.js");
const joi = require("joi");

const disciplinasSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
    maxLength: 30,
  },
  periodo: {
    type: String,
    required: true,
    maxLength: 3,
  },
  horario: {
    type: String,
    maxLength: 5,
    required: true,
  },
  local: {
    type: String,
    maxLength: 30,
    required: true,
  },
  professor: {
    type: String,
    maxLength: 30,
    required: true,
  },
  material: {
    type: String,
    maxLength: 200,
  },
  status: {
    type: String,
    required: true,
  },

  idUsuario: {
    type: mongoose.Types.ObjectId,
    ref: "Usuarios",
    required: true,
  },
});

function validarDisciplinas(disciplina) {
  const schema = joi.object({
    nome: joi.string().max(30).min(2).required().messages({
      "string.empty": `O nome não pode ficar vazio`,
      "string.min": `O nome precisa ter no mínimo {#limit} caracteres`,
      "string.max": `O nome precisa ter no máximo {#limit} caracteres`,
    }),
    periodo: joi
      .string()
      .max(3)
      .pattern(new RegExp("[^a-z]{1,3}"))
      .required()
      .messages({
        "string.empty": `O período não pode ficar vazio`,
        "string.pattern.base": `A período não pode conter números`,
        "string.max": `O período precisa ter no máximo {#limit} caracteres`,
      }),
    horario: joi
      .string()
      .max(5)
      .pattern(new RegExp("[^a-z]{1,5}"))
      .required()
      .messages({
        "string.empty": `O horário não pode ficar vazio`,
        "string.pattern.base": `O horário não pode conter letras`,
        "string.max": `O horário precisa ter no máximo {#limit} caracteres`,
      }),
    local: joi.string().max(30).required().messages({
      "string.empty": `O local não pode ficar vazio`,
      "string.max": `O local precisa ter no máximo {#limit} caracteres`,
    }),
    professor: joi
      .string()
      .max(30)
      .pattern(new RegExp("[^0-9]{1,30}"))
      .required()
      .messages({
        "string.empty": `O nome do professor não pode ficar vazio`,
        "string.pattern.base": `O nome do professor não pode conter números`,
        "string.max": `O nome do professor precisa ter no máximo {#limit} caracteres`,
      }),
    material: joi.string().max(500).allow("").messages({
      "string.max": `O link do material precisa ter no máximo {#limit} caracteres`,
    }),
    status: joi.required().valid("Em andamento", "Concluída"),
    idUsuario: joi.required(),
  });

  return schema.validate(disciplina);
}

disciplinasSchema.plugin(normalize);

disciplinasSchema.post(
  "findOneAndDelete",
  { document: false, query: true },
  function (obj) {
    console.log("oi");
    console.log(obj);
    atividades.deleteMany({ idDisciplina: obj._id }).exec();
  }
);

const DisciplinasModel = mongoose.model("Disciplinas", disciplinasSchema);

module.exports = { DisciplinasModel, validarDisciplinas };
