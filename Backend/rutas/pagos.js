const express = require('express');
const router = express.Router();

const pagosController = require('../controller/pagoscontrolller');
router.get('/', pagosController.list);
router.post('/', pagosController.save);
router.delete('/:idpago', pagosController.delete);
router.get('/:idpago', pagosController.edit);
router.post('/:idpago', pagosController.update);

module.exports = router;
