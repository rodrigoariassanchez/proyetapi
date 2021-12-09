const express = require('express');
const router = express.Router();

const visitedController = require('../controllers/visited.controller');

// Get all visited
router.get('/', visitedController.getVisitedList);

// Get visited by id 
router.get('/:id',visitedController.getAllVisitedById);

// Create new visited
router.post('/', visitedController.createNewVisited);

// Update visited
router.put('/:id', visitedController.updateVisited);

// Delete visited
router.delete('/:id', visitedController.deleteVisited);

module.exports = router;