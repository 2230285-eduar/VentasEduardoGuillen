const express = require('express');
const router = express.Router();

const cxcobrarController = require('../controller/cxcobrarcontroller');
router.get('/', cxcobrarController.list);
router.post('/', cxcobrarController.save);
router.delete('/:idcxc', cxcobrarController.delete);
router.get('/:idcxc', cxcobrarController.edit);
router.post('/:idcxc', cxcobrarController.update);

module.exports = router;
