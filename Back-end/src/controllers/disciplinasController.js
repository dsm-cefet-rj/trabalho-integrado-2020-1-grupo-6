const { db } = require("../models/Disciplinas.js");
const Disciplinas = require("../models/Disciplinas.js");
const Usuarios = require("../models/Usuarios.js");
const atividades = require("../models/Atividades.js");

module.exports = {
  create: async (req, res, next) => {
    try {
      const { idUsuario: userId, nome } = req.body;
      console.log(userId);
      const user = await Usuarios.findOne({ usuario: userId });
      console.log(user._id);
      // console.log(typeof user._id);
      // console.log(userId);
      console.log(user);
      req.body.idUsuario = user.id;

      const nomeIgualDisciplina = await Disciplinas.findOne({
        idUsuario: user._id,
        nome: nome,
      });
      if (nomeIgualDisciplina) {
        res.status(409);
        return res.json({
          resposta: "Disciplina com mesmo nome já foi criada",
        });
      }

      const disciplina = new Disciplinas({
        nome: req.body.nome,
        periodo: req.body.periodo,
        horario: req.body.horario,
        local: req.body.local,
        material: req.body.material,
        professor: req.body.professor,
        status: req.body.status,
        idUsuario: user._id,
      });
      // console.log(disciplina);
      await disciplina.save();

      return res.json(disciplina);
    } catch (err) {
      next(err);
    }
  },

  show: async (req, res, next) => {
    try {
      const { idUsuario: userId, nome, status } = req.query;
      console.log(userId, nome, status);

      if (userId) {
        const usuario = await Usuarios.findOne({ usuario: userId });
        const disciplina = await Disciplinas.find({
          idUsuario: usuario.id,
          ...(nome && { nome: new RegExp(nome, "ig") }),
          ...(status && { status: new RegExp(status, "ig") }),
        });
        console.log(nome, status);
        console.log(disciplina, usuario);
        return res.json(disciplina);
      }
    } catch (err) {
      next(err);
    }
  },

  showdisciplina: async (req, res, next) => {
    try {
      const { idUsuario: userId, Disciplina: disciplinaId } = req.query;
      console.log(disciplinaId, userId);

      if (userId) {
        const disciplina = await Disciplinas.findById(disciplinaId);
        // console.log(disciplina);
        return res.json(disciplina);
      }
    } catch (err) {
      next(err);
    }
  },

  update: async (req, res, next) => {
    try {
      const { id: disciplinaId } = req.params;
      const updateBody = req.body;
      const disciplina = await Disciplinas.findByIdAndUpdate(
        disciplinaId,
        updateBody
      );
      return res.json(disciplina);
    } catch (err) {
      next(err);
    }
  },

  delete: async (req, res, next) => {
    try {
      const { id: disciplinaId } = req.params;
      await Disciplinas.findByIdAndDelete(disciplinaId);
      return res.json({ ok: true });
    } catch (err) {
      next(err);
    }
  },
};
