const mongoose = require("mongoose");
const normalize = require("normalize-mongoose");

const atividadesSchema = mongoose.Schema({
    nome: {
        type: String,
        required: true,
        unique: false,        
        minLength: 2,
        maxLength: 25
    },
    dataEntrega: {
        type: String,
        required: true,
        unique: false,        
        minLength: 2,
        maxLength: 25
    },
    pontuacaoMax: {
        type: String,
        required: true,
        unique: false,        
        minLength: 1,
        maxLength: 3
    },
    status: {
        type: String,
        required: true,
        unique: false,        
        minLength: 2,
        maxLength: 25
    },
    tipo: {
        type: String,
        required: true,
        unique: false,        
        minLength: 2,
        maxLength: 25
    },
    descricao: {
        type: String,
        required: true,
        unique: false,        
        minLength: 2,
        maxLength: 25
    },
    notaFinal: {
        type: String,
        required: true,
        unique: false,        
        minLength: 1,
        maxLength: 25
    },
    arquivo: {
        type: String,
        required: true,
        unique: false,        
        minLength: 2,
        maxLength: 25
    },
    idDisciplina:{
        type: mongoose.Types.ObjectId,
        ref: 'Disciplinas',
        required: true
    },
    idUsuario:{
        type: mongoose.Types.ObjectId,
        ref: 'Usuarios',
        required: true
    }
});

atividadesSchema.plugin(normalize);

module.exports = mongoose.model("Atividades", atividadesSchema);
