const jwt = require("jsonwebtoken");
const { UsuariosModel: Usuarios } = require("../models/Usuarios.js");

module.exports = {
  generateToken: (id_user, username) => {
    return jwt.sign({ id: id_user, usuario: username }, process.env.SECRET, {
      expiresIn: 86400, //tempo passado em milisegundos
    });
  },
  validaUsuario: async (req, res, next) => {
    // console.log(req.headers);
    const auth = req.headers.authorization;

    if (!auth) {
      return res.status(401).json({
        resposta: "Não possui Token",
      });
    }

    const parts = auth.split(" ");
    if (!(parts.length === 2)) {
      return res.status(401).json({
        resposta: "Erro no token",
      });
    }

    const [scheme, token] = parts;

    if (!/^Bearer$/i.test(scheme)) {
      return res.status(401).json({
        resposta: "Token mal formatado",
      });
    }

    try {
      const payload = jwt.verify(token, process.env.SECRET);
      const usuario = await Usuarios.findById(payload.id);
      req.usuario = usuario;
      return next();
    } catch (err) {
      console.log(err);
    }
  },
};
