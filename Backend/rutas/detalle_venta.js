const express = require('express');
const router = express.Router();

const detalleVentaController = require('../controller/detaller_ventacontroller');
router.get('/', detalleVentaController.list);
router.post('/', detalleVentaController.save);
router.delete('/:iddetventa', detalleVentaController.delete);
router.get('/:iddetventa', detalleVentaController.edit);
router.post('/:iddetventa', detalleVentaController.update);

module.exports = router;
