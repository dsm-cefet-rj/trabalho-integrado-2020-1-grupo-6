const Disciplinas = require('../models/Disciplinas.js');

module.exports = {
    create: async(req, res, next) =>{
        try {
            const disciplina = await Disciplinas.create(req.body);
            return res.json(disciplina);
        }catch(err) {
            next(err);
        }
    },
    show: async(req, res, next) =>{
        try {
            const { id: disciplinaId } = req.params;
            const disciplina = await Disciplinas.findById(disciplinaId);
            return res.json(disciplina);
        } catch(err) {
            next(err);
        }
    },
    index: async(req, res, next) =>{
        try {
            const disciplina = await Disciplinas.find();
            return res.json(disciplina);
        } catch(err) {
            next(err);
        }
    },
    update: async(req, res, next) =>{
        try {
            const { id: disciplinaId } = req.params;
            const updateBody = req.body;
            const disciplina = await Disciplinas.findByIdAndUpdate(disciplinaId, updateBody);
            return res.json(disciplina);
        } catch(err) {
            next(err);
        }
    },
    delete: async(req, res, next) =>{
        try {
            const { id: disciplinaId } = req.params;
            await Disciplinas.findByIdAndDelete(disciplinaId);
            return res.json({"ok": true});
        } catch(err) {
            next(err);
        }
    },

}