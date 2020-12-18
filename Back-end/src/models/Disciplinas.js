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

disciplinasSchema.plugin(normalize);

module.exports = mongoose.model("Disciplinas", disciplinasSchema);
