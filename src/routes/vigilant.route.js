 const express = require('express');
 const router = express.Router();

 const vigilantController = require('../controllers/vigilant.controller');

 router.get('/',vigilantController.getVigilantist);

 router.get('/:id',vigilantController.getAllVigilantById);

 router.post('/',vigilantController.createNewVigilant);

 router.put('/:id',vigilantController.updateVigilant);

 router.delete('/:id',vigilantController.deleteVigilant);

 module.exports = router;