const Atividades = require('../models/Atividades.js');

module.exports = {
    create: async(req, res, next) =>{
        try {
            const atividade = await Atividades.create(req.body);
            return res.json(atividade);
        }catch(err) {
            next(err);
        }
    },
    show: async(req, res, next) =>{
        try {
            const { id: atividadeId } = req.params;
            const atividade = await Atividades.findById(atividadeId);
            return res.json(atividade);
        } catch(err) {
            next(err);
        }
    },
    index: async(req, res, next) =>{
        try {
            const atividade = await Atividades.find();
            return res.json(atividade);
        } catch(err) {
            next(err);
        }
    },
    update: async(req, res, next) =>{
        try {
            const { id: atividadeId } = req.params;
            const updateBody = req.body;
            const atividade = await Atividades.findByIdAndUpdate(atividadeId, updateBody);
            return res.json(atividade);
        } catch(err) {
            next(err);
        }
    },
    delete: async(req, res, next) =>{
        try {
            const { id: atividadeId } = req.params;
            await Atividades.findByIdAndDelete(atividadeId);
            return res.json({"ok": true});
        } catch(err) {
            next(err);
        }
    },

}