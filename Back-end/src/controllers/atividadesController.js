const Atividades = require("../models/Atividades.js");
const Disciplinas = require("../models/Disciplinas.js");
const Usuarios = require("../models/Usuarios.js");
module.exports = {
  create: async (req, res, next) => {
    try {
      const { idUsuario: userId } = req.body;
      const user = await Usuarios.findOne({ usuario: userId });
      req.body.idUsuario = user.id;
      const atividade = await Atividades.create(req.body);
      return res.json(atividade);
    } catch (err) {
      next(err);
    }
  },
  show: async (req, res, next) => {
    try {
      const { idDisciplina: disciplinaID } = req.query;
      const atividade = await Atividades.find({ idDisciplina: disciplinaID });
      return res.json(atividade);
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

  showfiltro: async (req, res, next) => {
    try {
      const {
        idUsuario: userId,
        status: estado,
        idDisciplina: disciplinaID,
      } = req.query;

      if (estado != undefined) {
        const user = await Usuarios.findOne({ usuario: userId });
        const atividade = await Atividades.find({
          idUsuario: user.id,
          status: estado,
          idDisciplina: disciplinaID,
        });
        return res.json(atividade);
      } else {
        const user = await Usuarios.findOne({ usuario: userId });
        const atividade = await Atividades.find({
          idUsuario: user.id,
          idDisciplina: disciplinaID,
        });
        return res.json(atividade);
      }
    } catch (err) {
      next(err);
    }
  },
  index: async (req, res, next) => {
    try {
      const { idUsuario: userId } = req.query;
      const user = await Usuarios.findOne({ usuario: userId });
      const atividade = await Atividades.find({ idUsuario: user.id });
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
  showfiltroAtividades: async (req, res, next) => {
    try {
      console.log(req.query);
      console.log("oi");
      const { idUsuario: userId, status: estado } = req.query;

      if (estado != undefined) {
        const user = await Usuarios.findOne({ usuario: userId });
        const atividade = await Atividades.find({
          idUsuario: user.id,
          status: estado,
        });
        return res.json(atividade);
      } else {
        const user = await Usuarios.findOne({ usuario: userId });
        const atividade = await Atividades.find({ idUsuario: user.id });
        return res.json(atividade);
      }
    } catch (err) {
      next(err);
    }
  },
};
