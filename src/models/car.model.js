 var dbConn = require('../../config/db.config');

 var Car = function (car) {
     this.marca = car.marca;
     this.modelo = car.modelo;
     this.color = car.color;
     this.placas = car.placas;
     this.imagen = car.imagen;
     this.observaciones = car.observaciones;
 }

//  Get all Car
Car.getAllCar = (result) => {
    dbConn.query('SELECT * FROM vehiculos', (err, res) =>{
        if(err) {
            console.log("Error while fetching car:", err); 
            result(null, err);
        }
        else{
            console.log('Car fetched successfully');
            result(null, res);
        }
    })
}

// GET CAR BY ID FORM DB

Car.getAllCarById = (id, result) => {
    dbConn.query('SELECT * FROM vehiculos WHERE id_vehiculo=?',id, (err, res) =>{
        if(err){
            console.log('Error while fetching car by id', err);
            result(null, err);
        }else{
            result(null, res);
        }
    })
} 

// CREATE NEW CAR 
Car.createCar = (carData, result) => {
    dbConn.query('INSERT INTO vehiculos SET ? ', carData,(err, res) => {
        if(err){
            console.log('Error while inserting data');
            result(null, err);
        }else{
            console.log('Car created successfully');
            result(null, res)
        }
    })
}

Car.updateCar = (id, carData, result) => {
    dbConn.query("UPDATE vehiculos SET marca=?, modelo=?, color=?, placas=?, imagen=?, observaciones=? WHERE id_vehiculo=?",[carData.marca, carData.modelo, carData.color, carData.placas, carData.imagen, carData.observaciones, carData.id_vehiculo, id], (err, res) => {
        if(err){
            console.log('Error while updating the car');
            result(null, err);
        }else {
            console.log("Car updated successfully");
            result(null, res);
        }
    });
}

Car.deleteCar = (id, result) => {
    dbConn.query('DELETE FROM vehiculos WHERE id_vehiculo=?',[id],(err, res) => {
        if(err){
            console.log('Error while deleting the visited');
            result(null, err);
        }else {
            result(null, res);
        }
    })
} 

module.exports = Car;