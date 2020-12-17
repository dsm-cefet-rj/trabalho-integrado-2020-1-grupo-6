const Usuarios = require('../models/Usuarios.js');

module.exports = {
    create: async(req, res, next) =>{
        try {
            const usuario = await Usuarios.create(req.body);
            return res.json(usuario);
        }catch(err) {
            next(err);
        }
    },
    show: async(req, res, next) =>{
        try {
            const { id: userId } = req.query;
              if(userId){
                  const usuario=await Usuarios.findById(userId);
                  return res.json(usuario);
              }
               else{
                   const{usuario,senha}=req.query;
                   const usuariodata = await Usuarios.findOne({usuario:usuario});                               
                   if(usuariodata["senha"]==senha)
                   {
                    console.log("oi");
                       return res.json(usuariodata);
                   }
               }}
       catch(err) {
            next(err);
        }
    },
    index: async(req, res, next) =>{
        try {
            const usuario = await Usuarios.find();
            return res.json(usuario);
        } catch(err) {
            next(err);
        }
    },
    update: async(req, res, next) =>{
        try {
            const { id: userId } = req.params;
            const updateBody = req.body;
            const usuario = await Usuarios.findByIdAndUpdate(userId, updateBody);
            return res.json(usuario);
        } catch(err) {
            next(err);
        }
    },
    delete: async(req, res, next) =>{
        try {
            const { id: userId } = req.params;
            await Usuarios.findByIdAndDelete(userId);
            return res.json({"ok": true});
        } catch(err) {
            next(err);
        }
    },

}