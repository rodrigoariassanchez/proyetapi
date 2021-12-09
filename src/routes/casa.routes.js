const express = require('express')
const router = express.Router()
const casaController = require('../controllers/casa.controller');

// Retrieve all casas
router.get('/', casaController.findAll);

// Create a new casa
router.post('/', casaController.create);

// Retrieve a single casa with id
router.get('/:id', casaController.findById);

// Update a casa with id
router.put('/:id', casaController.update);

// Delete a casa with id
router.delete('/:id', casaController.delete);

module.exports = router