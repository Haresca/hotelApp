const mongoose = require('mongoose');

//Esquema de la clase cliente
const HabitacionSchema = mongoose.Schema({
    
    numeroHabitacion: {
        type: String,
        require: true
    },

    categoria: {
        type: String,
        require: true
    },

    precio: {
        type: Number,
        require: true
    },

    descripcion: {
        type: String,
        require: false
    },

    estado: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('habitacion', HabitacionSchema);