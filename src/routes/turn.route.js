
const express = require('express');
 const router = express.Router();

 const turnController = require('../controllers/turn.controller');


 router.get('/', turnController.getTurnList);

 router.get('/:id', turnController.getAllTurnById);

 router.post('/', turnController.createNewTurn);

 router.put('/:id', turnController.updateTurn);

 router.delete('/:id', turnController.deleteTurn);
 

 module.exports = router;