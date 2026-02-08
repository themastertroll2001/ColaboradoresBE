const express = require('express');
const router = express.Router();
const controller = require('../controllers/colaboradorcontroller');

router.get('/colaborador', controller.getColaboradores);
router.post('/colaborador', controller.createColaborador);
router.put('/colaborador/:id', controller.updateColaborador);
router.delete('/colaborador/:id', controller.deleteColaborador);

module.exports = router;
