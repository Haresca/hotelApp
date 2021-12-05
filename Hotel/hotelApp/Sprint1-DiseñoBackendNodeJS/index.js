const express = require('express');
const conectarDB = require('./config/db');
const cors = require('cors');

//Creamos el servidor.
const app = express();

//Conexión a la base de datos.
conectarDB();
//Uso de los cors
app.use(cors());
//Que pueda utilizar archivos json
app.use(express.json());

//Llamamos las rutas.
app.use('/api/cliente', require('./routers/cliente'));
app.use('/api/habitacion', require('./routers/habitacion'));


app.listen(5000, () => {
    console.log('El servidor escuchando');
})