const mongoose = require('mongoose');
const normalize = require('normalize-mongoose');

const disciplinasSchema = mongoose.Schema({
    nome: {
        type: String,
        required: true,
        unique: false,        
        minLength: 2,
        maxLength: 25
    },
    periodo: {
        type: String,
        required: true,
        unique: false,        
        minLength: 1,
        maxLength: 2
    },
    horario: {
        type: String,
        required: true,
        unique: false,        
        minLength: 2,
        maxLength: 25
    },
    local: {
        type: String,
        required: true,
        unique: false,        
        minLength: 2,
        maxLength: 25
    },
    professor: {
        type: String,
        required: true,
        unique: false,        
        minLength: 2,
        maxLength: 25
    },
    material: {
        type: String,
        required: true,
        unique: false,        
        minLength: 2,
        maxLength: 25
    },
    status: {
        type: String,
        required: true,
        unique: false,        
        minLength: 2,
        maxLength: 25
    },

    idUsuario:{
        type: mongoose.Types.ObjectId,
        ref: 'Usuarios',
        required: true
    }
});

disciplinasSchema.plugin(normalize);

module.exports = mongoose.model('Disciplinas', disciplinasSchema);