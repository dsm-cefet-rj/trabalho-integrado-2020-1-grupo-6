const Usuarios = require("../models/Usuarios.js");

module.exports = {
  create: async (req, res, next) => {
    try {
      const usuario = await Usuarios.create(req.body);
      return res.json(usuario);
    } catch (err) {
      next(err);
    }
  },
  show: async (req, res, next) => {
    try {
      const { id: userId } = req.query;
      if (userId) {
        const usuario = await Usuarios.findById(userId);
        console.log(usuario);
        return res.json(usuario);
      } else {
        const { usuario, senha } = req.query;
        const usuariodata = await Usuarios.findOne({ usuario: usuario });
        if (usuariodata["senha"] == senha) {
          return res.json(usuariodata);
        }
      }
    } catch (err) {
      return res.json(1);
    }
  },
  index: async (req, res, next) => {
    try {
      const usuario = await Usuarios.find();
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
      return res.json(usuario);
    } catch (err) {
      next(err);
    }
  },
  delete: async (req, res, next) => {
    try {
      console.log(req.query);
      console.log(req.body);
      console.log(req.params);

      const { id: userId } = req.params;
      const user = await Usuarios.findOne({ usuario: userId });
      await Usuarios.findByIdAndDelete(user.id);
      return res.json({ ok: true });
    } catch (err) {
      next(err);
    }
  },
  showPerfil: async (req, res, next) => {
    try {
      const { idUsuario: userId } = req.query;
      const user = await Usuarios.findOne({ usuario: userId });
      return res.json(user);
    } catch (err) {
      next(err);
    }
  },
  EditarPerfil: async (req, res, next) => {
    try {
      console.log(req.params);
      //   console.log("deu ruim");

      const { idUsuario: userId } = req.params;
      const user = await Usuarios.findOne({ idUsuario: userId });
      console.log(user);
      const updateBody = req.body;
      const usuario = await Usuarios.findByIdAndUpdate(user.id, updateBody);
      console.log(usuario);

      return res.json(usuario);
    } catch (err) {
      next(err);
    }
  },
};
