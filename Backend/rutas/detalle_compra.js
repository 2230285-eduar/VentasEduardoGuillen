const express = require('express');
const router = express.Router();

const detalleCompraController = require('../controller/detalle_comprarcontroller');
router.get('/', detalleCompraController.list);
router.post('/', detalleCompraController.save);
router.delete('/:iddetcomp', detalleCompraController.delete);
router.get('/:iddetcomp', detalleCompraController.edit);
router.post('/:iddetcomp', detalleCompraController.update);

module.exports = router;
