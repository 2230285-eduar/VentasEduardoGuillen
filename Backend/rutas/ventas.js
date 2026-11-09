const express = require('express');
const router = express.Router();
const ventasController = require('../controller/ventasController');

router.get('/', ventasController.listar);
router.get('/:id', ventasController.buscar);
router.post('/', ventasController.crear);
router.put('/:id', ventasController.actualizar);
router.delete('/:id', ventasController.eliminar);

module.exports = router;