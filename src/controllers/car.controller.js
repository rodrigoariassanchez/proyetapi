 const CarModel = require('../models/car.model');

 exports.getCarList = (req, res) => {
     CarModel.getAllCar((err, car) => {
         console.log('We are here');
         if(err)
         res.send(err);
         console.log('Car', car);
         res.send(car)
     })
 }

 exports.getAllCarById = (req, res) => {
     CarModel.getAllCarById(req.params.id, (err, car) => {
         if(err)
         res.send(err);
         console.log('Single car data',car)
         res.send(car);
     })
 }

 exports.createNewCar = (req, res) => {
     const carData = new CarModel(req.body);
     console.log('carData',carData);
     if(req.body.contructor === Object && Object.keys(req.body).length === 0){
         res.send(400).send({success:false, message: 'Plase fill all fields'});
     }else{
         CarModel.createCar(carData, (err, car) => {
             if(err)
             res.send(err);
             res.json({status: true, message: 'Car created successfully', data: car.insertId})
         })
     }
 }

 exports.updateCar = (req, res) => {
     const carData = new CarModel(req.body);
     console.log('carData update', carData);
     if(req.body.contructor === Object && Object.keys(req.body).length === 0){
         res.send(400).send({success:false, message: 'Please fill all fields'});
     }else{
         CarModel.updateCar(req.params.id, carData, (err, car) => {
             if(err)
             res.send(err);
             res.json({status: true, message: 'Car updated successfully'})
         })
     }
 }

 exports.deleteCar = (req, res) => {
     CarModel.deleteCar(req.params.id, (err, car) => {
         if(err)
         res.send(err);
         res.json({success:true, message: 'Visited deleted successfully'});
     });
 }