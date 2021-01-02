const Usuarios = require("../models/Usuarios.js");
const bcrypt=require('bcryptjs');
module.exports = {
  create: async (req, res, next) => {
    try {
      console.log(req.body);
   //   req.body.senhaHash="5";
      req.body.senha = await bcrypt.hash(req.body.senha, 8)
      console.log(req.body);
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
        const iscorrect= bcrypt.compareSync(req.query.senha,usuario.senha);
        return res.json(usuario);
      } else {
        const { usuario, senha } = req.query;
        const usuariodata = await Usuarios.findOne({ usuario: usuario });
        const iscorrect= bcrypt.compareSync(req.query.senha,usuariodata.senha);
        console.log(iscorrect);
        if (iscorrect) {
          return res.json(usuariodata);
        }
        else{
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
      console.log(req.query);
      console.log(req.body);
      console.log(req.params);

      const { id: userId } = req.params;
      const user = await Usuarios.findOne({ usuario: userId });
      console.log(userId);
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
      console.log(user);
      return res.json(user);
    } catch (err) {
      next(err);
    }
  },

  EditarPerfil: async (req, res, next) => {
    try {
      // console.log(req.params);
      const { id: userId } = req.params;
      // console.log(userId);
      const user = await Usuarios.findOne({ usuario: userId });
      // console.log(user);
      // console.log(user.id);
      const updateBody = req.body;
      // console.log(updateBody);
      const usuario = await Usuarios.findByIdAndUpdate(user.id, updateBody);
      // console.log(usuario);

      return res.json(usuario);
    } catch (err) {
      next(err);
    }
  },
};
