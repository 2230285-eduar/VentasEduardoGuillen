const express = require('express');
const router = express.Router();
const clientesController = require('../controller/clientesController');

router.get('/', clientesController.listar);
router.get('/:id', clientesController.buscar);
router.post('/', clientesController.crear);
router.put('/:id', clientesController.actualizar);
router.delete('/:id', clientesController.eliminar);

module.exports = router;