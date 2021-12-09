 const express = require('express');
 const router = express.Router();

 const carController = require('../controllers/car.controller');

//  Get all car
router.get('/', carController.getCarList);

// Get car by id
router.get('/:id', carController.getAllCarById);

// Craete new car
router.post('/', carController.createNewCar);

// Update Car
router.put('/:id', carController.updateCar);

// Delete Car
router.delete('/:id', carController.deleteCar);



module.exports = router;
