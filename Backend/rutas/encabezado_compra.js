const express = require('express');
const router = express.Router();

const encabezadoCompraController = require('../controller/encabezado_compracontrolller');
router.get('/', encabezadoCompraController.list);
router.post('/', encabezadoCompraController.save);
router.delete('/:num_compra', encabezadoCompraController.delete);
router.get('/:num_compra', encabezadoCompraController.edit);
router.post('/:num_compra', encabezadoCompraController.update);

module.exports = router;
