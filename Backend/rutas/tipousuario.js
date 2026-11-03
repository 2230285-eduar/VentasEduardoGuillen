const express = require('express');
const router = express.Router();

const tipousuarioController = require('../controller/tipousuariocontrolller');
router.get('/', tipousuarioController.list);
router.post('/', tipousuarioController.save);
router.delete('/:idtpusuario', tipousuarioController.delete);
router.get('/:idtpusuario', tipousuarioController.edit);
router.post('/:idtpusuario', tipousuarioController.update);

module.exports = router;
