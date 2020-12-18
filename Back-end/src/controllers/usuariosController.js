const Usuarios = require("../models/Usuarios.js");

module.exports = {
  create: async (req, res, next) => {
    try {
      const usuario = await Usuarios.create(req.body);
      res.statusCode = 200;
      return res.json(usuario);
    } catch (err) {
      next(err);
    }
  },
  show: async (req, res, next) => {
    try {
      const { id: userId } = req.params;
      const usuario = await Usuarios.findById(userId);
      res.statusCode = 200;
      return res.json(usuario);
    } catch (err) {
      next(err);
    }
  },
  index: async (req, res, next) => {
    try {
      const usuario = await Usuarios.find();
      res.statusCode = 200;
      return res.json(usuario);
    } catch (err) {
      next(err);
    }
  },
  update: async (req, res, next) => {
    try {
      const { id: userId } = req.params;
      const updateBody = req.body;
      const usuario = await Usuarios.findByIdAndUpdate(userId, updateBody);
      res.statusCode = 200;
      return res.json(usuario);
    } catch (err) {
      next(err);
    }
  },
  delete: async (req, res, next) => {
    try {
      const { id: userId } = req.params;
      await Usuarios.findByIdAndDelete(userId);
      res.statusCode = 200;
      return res.json({ ok: true });
    } catch (err) {
      next(err);
    }
  },
};
