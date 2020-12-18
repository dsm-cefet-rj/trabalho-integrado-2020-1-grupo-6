const mongoose = require("mongoose");
const normalize = require("normalize-mongoose");

const disciplinasSchema = mongoose.Schema({
  nome: {
    type: String,
    required: true,
    unique: true,
  },
  periodo: {
    type: String,
    required: true,
    unique: false,
  },
  horario: {
    type: String,
    required: true,
    unique: false,
  },
  local: {
    type: String,
    required: true,
    unique: false,
  },
  professor: {
    type: String,
    required: true,
    unique: false,
  },
  material: {
    type: String,
    required: true,
    unique: false,
  },
  status: {
    type: String,
    required: true,
    unique: false,
  },

  idUsuario: {
    type: mongoose.Types.ObjectId,
    ref: "Usuarios",
    required: true,
  },
});

function validarDisciplinas(disciplina) {
  const schema = joi.object({
    nomeDisciplina: joi.string().alphanum().required().max(30),
    periodo: joi.string().required().min(3).max(12),
    horario: joi.string().required().max(30),
    local: joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
    nomeProfessor: joi.ref("senha"),
  });

  return schema.validate(usuario);
}

disciplinasSchema.plugin(normalize);

module.exports = mongoose.model("Disciplinas", disciplinasSchema);
