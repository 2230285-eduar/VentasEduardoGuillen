const express = require('express');
const router = express.Router();

const encabezadoVentaController = require('../controller/encabezado_ventacontroller');
router.get('/', encabezadoVentaController.list);
router.post('/', encabezadoVentaController.save);
router.delete('/:num_venta', encabezadoVentaController.delete);
router.get('/:num_venta', encabezadoVentaController.edit);
router.post('/:num_venta', encabezadoVentaController.update);

module.exports = router;
