const express = require('express');
const router = express.Router();

const visitaController = require('../controllers/visita.controller');

//obtener todas las visitas
router.get('/', visitaController.getVisitasList);

router.get('/:id', visitaController.getVisitaByID);

router.post('/', visitaController.create);

router.put('/:id', visitaController.update);

router.delete('/:id', visitaController.delete);





module.exports = router;
