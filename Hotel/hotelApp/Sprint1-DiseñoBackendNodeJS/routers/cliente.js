const express = require('express');
const router = express.Router();

//Importamos los controllers.
const clienteController = require('../controllers/clienteController');

//Crear las rutas del cliente.
router.post('/', clienteController.registrarCliente);
router.get('/', clienteController.consultarClientes);
router.get('/:id', clienteController.consultarCliente);
router.put('/:id', clienteController.actualizarCliente);
router.delete('/:id', clienteController.eliminarCliente);

module.exports = router;