const {
  UsuariosModel: Usuarios,
  validarUsuario,
} = require("../models/Usuarios.js");

const bcrypt = require("bcryptjs");
const { model } = require("mongoose");
const joi = require("@hapi/joi");

module.exports = {
  create: async (req, res, next) => {
    try {
      console.log(req.body);

      const user = await Usuarios.findOne({ usuario: req.body.usuario });
      if (user) {
        res.status(409);
        return res.json({
          resposta: "Usuário já existe. Favor escolher outro.",
        });
      }

      const usuariosValidated = validarUsuario(req.body);
      // console.log(usuariosValidated);
      // // console.log(usuariosValidated.error.details);
      if (usuariosValidated.error) {
        return res.status(400).json({
          resposta: usuariosValidated.error.details[0].message,
        });
      }
      req.body.senha = await bcrypt.hash(req.body.senha, 8);
      console.log(req.body);

      const usuario = await Usuarios.create(req.body);
      return res.json(usuario);
    } catch (error) {
      next(error);
    }
  },

  show: async (req, res, next) => {
    try {
      const { id: userId } = req.body;
      if (userId) {
        const usuario = await Usuarios.findById(userId);
        const iscorrect = bcrypt.compareSync(req.body.senha, usuario.senha);
        return res.json(usuario);
      } else {
        const { usuario, senha } = req.body;
        const usuariodata = await Usuarios.findOne({ usuario: usuario });
        const iscorrect = bcrypt.compareSync(req.body.senha, usuariodata.senha);
        console.log(iscorrect);
        if (iscorrect) {
          return res.json(usuariodata);
        } else {
          return res.json(1);
        }
      }
    } catch (err) {
      return res.json(1);
    }
  },

  update: async (req, res, next) => {
    try {
      const { id: userId } = req.params;
      const updateBody = req.body;
      const usuario = await Usuarios.findByIdAndUpdate(userId, updateBody);
      console.log(usuario);
      return res.json(usuario);
    } catch (err) {
      next(err);
    }
  },

  delete: async (req, res, next) => {
    try {
      const { id: userId } = req.params;
      const user = await Usuarios.findOne({ usuario: userId });
      // console.log(user);
      // console.log(userId);
      await Usuarios.findByIdAndDelete(user._id);
      return res.json({ ok: true });
    } catch (err) {
      next(err);
    }
  },

  showPerfil: async (req, res, next) => {
    try {
      const { idUsuario: userId } = req.query;
      const user = await Usuarios.findOne({ usuario: userId });
      console.log(user);
      return res.json(user);
    } catch (err) {
      next(err);
    }
  },

  EditarPerfil: async (req, res, next) => {
    try {
      const { id: userId } = req.params;

      const user = await Usuarios.findOne({ usuario: userId });
      console.log(user);
      const updateBody = req.body;
      updateBody.usuario = user.usuario;
      console.log(req.body);

      const usuariosValidated = validarUsuario(req.body);
      console.log(usuariosValidated);

      if (usuariosValidated.error) {
        return res.status(400).json({
          resposta: usuariosValidated.error.details[0].message,
        });
      }

      const usuario = await Usuarios.findByIdAndUpdate(user.id, updateBody);

      return res.json(usuario);
    } catch (err) {
      next(err);
    }
  },
};
