const mongoose = require('mongoose');
const normalize = require('normalize-mongoose');

const disciplinasSchema = mongoose.Schema({
    nome: {
        type: String,
        required: true,
        unique: true,        
        minLength: 20,
        maxLength: 25
    },
    periodo: {
        type: String,
        required: true,
        unique: false,        
        minLength: 20,
        maxLength: 25
    },
    horario: {
        type: String,
        required: true,
        unique: false,        
        minLength: 20,
        maxLength: 25
    },
    local: {
        type: String,
        required: true,
        unique: false,        
        minLength: 20,
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