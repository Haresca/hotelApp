const mongoose = require('mongoose');

//
const conectarDB = async () => {

    try {
        await mongoose.connect('mongodb+srv://jean:12345@cluster0.fj9fz.mongodb.net/Hotel', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('Base de datos conectada correctamente');

    } catch (error) {
        console.log('Error de conexion');
        process.exit(1);
    }
}

module.exports = conectarDB;