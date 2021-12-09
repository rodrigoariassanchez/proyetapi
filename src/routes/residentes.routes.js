const express = require('express')
const router = express.Router()
const residentesController = require('../controllers/residentes.controller');

router.get('/', residentesController.findAll);


router.post('/', residentesController.create);


router.get('/:id', residentesController.findById);


router.put('/:id', residentesController.update);


router.delete('/:id', residentesController.delete);

module.exports = router