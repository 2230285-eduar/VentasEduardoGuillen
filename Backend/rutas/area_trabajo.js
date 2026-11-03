const express = require('express');
const router = express.Router();

const areaTrabajoController = require('../controller/area_trabajocontroller');
router.get('/', areaTrabajoController.list);
router.post('/', areaTrabajoController.save);
router.delete('/:idarea', areaTrabajoController.delete);
router.get('/:idarea', areaTrabajoController.edit);
router.post('/:idarea', areaTrabajoController.update);

module.exports = router;