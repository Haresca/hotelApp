const mongoose = require('mongoose');

//Esquema de la clase cliente
const ClienteSchema = mongoose.Schema({

    tipoDocumento: {   type: String,     require: true    },

    numeroDocumento: {        type: String,        require: true    },

    primerNombre: {        type: String,        require: true    },

    segundoNombre: {        type: String,        require: false    },

    primerApellido: {        type: String,        require: true    },

    segundoApellido: {        type: String,        require: false    },

    email: {        type: String,        require: true    },

    direccion: {        type: String,        require: true    },

    fechaNacimiento: {        type: Number,        //default: Date.now(),        require: true    
    },

    telefono: {        type: String,        require: true    }

})

module.exports = mongoose.model('cliente', ClienteSchema);