const Disciplinas = require('../models/Disciplinas.js');
const Usuarios = require('../models/Usuarios.js');
module.exports = {
    create: async (req, res, next) => {
        try {
            const { idUsuario: userId } = req.body;      
            const user = await Usuarios.findOne({ usuario: userId });
            req.body.idUsuario=user.id;
            const disciplina = await Disciplinas.create(req.body);
            return res.json(disciplina);
        } catch (err) {
            next(err);
        }
    },
    show: async (req, res, next) => {
        try {
            const { idUsuario: userId } = req.query;
           
            if (userId) {
                const user = await Usuarios.findOne({ usuario: userId });
                const disciplina = await Disciplinas.find({ idUsuario: user.id });
                return res.json(disciplina);
            }

        } catch (err) {
            next(err);
        }
    },
    //Filtrar por status
    showfiltro: async (req, res, next) => {
        try {
            const { idUsuario: userId, status: estado, nome_like: filtroNome } = req.query;
            console.log(estado);
            console.log(filtroNome);
            if (estado != undefined) {
                const user = await Usuarios.findOne({ usuario: userId });
                const disciplina = await Disciplinas.find({ idUsuario: user.id, status: estado });

                return res.json(disciplina);
            }
            else {
                const user = await Usuarios.findOne({ usuario: userId });
                const disciplina = await Disciplinas.find({ idUsuario: user.id });             
                return res.json(disciplina);

            }
        } 
        catch (err) {
            next(err);
        }
    },
    showdisciplina: async (req, res, next) => {
        try {
            const { idUsuario: userId, Disciplina: disciplinaId } = req.query;
            if (userId) {
                const disciplina = await Disciplinas.findById(disciplinaId);
                return res.json(disciplina);
            }

        } catch (err) {
            next(err);
        }
    },
 
    index: async (req, res, next) => {
        try {
            const disciplina = await Disciplinas.find();
            return res.json(disciplina);
        } catch (err) {
            next(err);
        }
    },
    update: async (req, res, next) => {
        try {
            const {id: disciplinaId } = req.params;
            const updateBody = req.body;
            const disciplina = await Disciplinas.findByIdAndUpdate(disciplinaId, updateBody);
            return res.json(disciplina);
        } catch (err) {
            next(err);
        }
    },
    delete: async (req, res, next) => {
        try {
            const { id: disciplinaId } = req.params;
            await Disciplinas.findByIdAndDelete(disciplinaId);
            return res.json({ "ok": true });
        } catch (err) {
            next(err);
        }
    },

}
