const { findOne } = require("../models/Atividades.js");
const {
  AtividadesModel: Atividades,
  validarAtividades,
} = require("../models/Atividades.js");
const Disciplinas = require("../models/Disciplinas.js");
const Usuarios = require("../models/Usuarios.js");

module.exports = {
  create: async (req, res, next) => {
    try {
      const { idUsuario: userId, nome, idDisciplina } = req.body;
      const atividadeValidated = validarAtividades(req.body);
      console.log(atividadeValidated);
      // console.log(atividadeValidated.error.details);
      if (atividadeValidated.error) {
        return res.status(400).json({
          resposta: atividadeValidated.error.details[0].message,
        });
      }
      const user = await Usuarios.findOne({ usuario: userId });
      req.body.idUsuario = user.id;
      console.log(idDisciplina);
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
      console.log(username, idDisciplina, status, nome);
      if (username) {
        const usuario = await Usuarios.findOne({ usuario: username });
        const atividade = await Atividades.find({
          idUsuario: usuario.id,
          ...(idDisciplina && { idDisciplina: idDisciplina }),
          ...(status && { status: new RegExp(status, "ig") }),
          ...(nome && { nome: new RegExp(nome, "ig") }),
        });
        // console.log(status);
        // console.log(atividade);
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
      const { idUsuario } = req.body;

      const updateBody = req.body;
      // console.log(updateBody);
      const user = await Usuarios.findOne({ usuario: idUsuario });
      updateBody.idUsuario = user._id;

      const atividadeValidated = validarAtividades(req.body);
      if (atividadeValidated.error) {
        return res.status(400).json({
          resposta: atividadeValidated.error.details[0].message,
        });
      }

      const nomeIgualAtividade = await Atividades.findOne({
        nome: updateBody.nome,
        idDisciplina: updateBody.idDisciplina,
      });
      console.log(nomeIgualAtividade);
      if (nomeIgualAtividade) {
        res.status(409);
        return res.json({ resposta: "Atividade com mesmo nome já foi criada" });
      }

      const atividade = await Atividades.findByIdAndUpdate(
        atividadeID,
        updateBody
      );
      return res.json(atividade);
    } catch (err) {
      next(err);
    }
  },
  // update: async (req, res, next) => {
  //   try {
  //     const { id: atividadeID, idUsuario } = req.params;
  //     const updateBody = req.body;
  //     // console.log(idUsuario);
  //     // console.log(atividadeID);
  //     // console.log(idDisciplina);

  //     const atividadeValidated = validarAtividades(req.body);
  //     // console.log(atividadeValidated);
  //     // console.log(atividadeValidated.error.details);
  //     if (atividadeValidated.error) {
  //       return res.status(400).json({
  //         resposta: atividadeValidated.error.details[0].message,
  //       });
  //     }

  //     // const nomeIgualAtividade = await Atividades.findOne({
  //     //   nome: nome,
  //     //   idDisciplina: idDisciplina,
  //     // });
  //     // console.log(nomeIgualAtividade);
  //     // if (nomeIgualAtividade) {
  //     //   res.status(409);
  //     //   return res.json({ resposta: "Atividade com mesmo nome já foi criada" });
  //     // }
  //     const atividade = await Atividades.findByIdAndUpdate(
  //       atividadeID,
  //       updateBody
  //     );
  //     return res.json(atividade);
  //   } catch (err) {
  //     next(err);
  //   }
  // },

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
