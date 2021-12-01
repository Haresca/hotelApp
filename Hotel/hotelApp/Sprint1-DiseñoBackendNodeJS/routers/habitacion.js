const express = require('express');
const router = express.Router();

//Importamos los controllers.
const habitacionController = require('../controllers/habitacionController');

//Crear las rutas del cliente.
router.post('/', habitacionController.registrarHabitacion);
router.get('/', habitacionController.consultarHabitaciones);
router.get('/:id', habitacionController.consultarHabitacion);
router.put('/:id', habitacionController.actualizarHabitacion);
router.delete('/:id', habitacionController.eliminarHabitacion);

module.exports = router;