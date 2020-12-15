const mongoose = require('mongoose');
const normalize = require('normalize-mongoose');

const usuariosSchema = mongoose.Schema({
    nome: {
        type: String,
        required: true,
        unique: false,        
        minLength: 2,
        maxLength: 25
    },
    usuario: {
        type: String,
        required: true,
        unique: true,        
        minLength: 2,
        maxLength: 25
    },
     curso: {
        type: String,
        required: true,
        unique: false,        
        minLength: 2,
        maxLength: 24
    },
    senha: {
        type: String,
        required: true,
        unique: false,        
        minLength: 2,
        maxLength: 25
    },
});

usuariosSchema.plugin(normalize);

module.exports = mongoose.model('Usuarios', usuariosSchema);