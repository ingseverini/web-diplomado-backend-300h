const express = require('express');
const router = express.Router();
const nombreController = require('../controllers/nombreMascotaController');

router.get('/', nombreController.obtenerNombres);
router.post('/crear', nombreController.crearNombre);

module.exports = router;
