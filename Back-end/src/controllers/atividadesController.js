const Atividades = require("../models/Atividades.js");
const Disciplinas = require("../models/Disciplinas.js");
const Usuarios = require("../models/Usuarios.js");

module.exports = {
  create: async (req, res, next) => {
    try {
      const { idUsuario: userId, nome, idDisciplina } = req.body;
      const user = await Usuarios.findOne({ usuario: userId });
      req.body.idUsuario = user.id;
      const nomeIgualAtividade = await Atividades.findOne({
        nome: nome,
        idDisciplina: idDisciplina,
      });
      if (nomeIgualAtividade) {
        res.status(409);
        return res.json({ resposta: "Atividade com mesmo nome já foi criada" });
      }
      // console.log(nomeIgualAtividade);
      const atividade = await Atividades.create(req.body);
      return res.json(atividade);
    } catch (err) {
      next(err);
    }
  },

  show: async (req, res, next) => {
    try {
      const { idUsuario: username, idDisciplina, status, nome } = req.query;

      if (username) {
        const usuario = await Usuarios.findOne({ usuario: username });
        const atividade = await Atividades.find({
          idUsuario: usuario.id,
          ...(idDisciplina && { idDisciplina: idDisciplina }),
          ...(status && { status: new RegExp(status, "ig") }),
          ...(nome && { nome: new RegExp(nome, "ig") }),
        });
        // console.log(status);
        console.log(atividade);
        return res.json(atividade);
      }
    } catch (err) {
      next(err);
    }
  },

  showatividade: async (req, res, next) => {
    try {
      console.log(req.query);
      const { id: disciplinaId } = req.params;
      const atividade = await Atividades.findById(disciplinaId);
      return res.json(atividade);
    } catch (err) {
      next(err);
    }
  },

  update: async (req, res, next) => {
    try {
      const { id: atividadeID } = req.params;
      const updateBody = req.body;
      const atividade = await Atividades.findByIdAndUpdate(
        atividadeID,
        updateBody
      );
      return res.json(atividade);
    } catch (err) {
      next(err);
    }
  },

  delete: async (req, res, next) => {
    try {
      const { id: atividadeId } = req.params;
      await Atividades.findByIdAndDelete(atividadeId);
      return res.json({ ok: true });
    } catch (err) {
      next(err);
    }
  },
};
