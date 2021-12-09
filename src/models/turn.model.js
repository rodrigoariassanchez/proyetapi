 var dbConn = require('../../config/db.config');


 var Turn = function(turn){
     this.nombre =  turn.nombre;
     this.estatus = turn.estatus;
 }

 Turn.getAllTurn = (result) => {
     dbConn.query('SELECT * FROM turnos',(err, res) => {
         if(err) {
             console.log("Error while fetching turn:", err);
             result(null, err);
         }
         else{
             console.log('Car fetched successfully');
             result(null, res);
         }
     })
 }

 Turn.getAllTurnById = (id, result) => {
     dbConn.query('SELECT * FROM turnos WHERE id_turno=?',id,(err,res) => {
         if(err){
             console.log('Error while fetching turn by id', err);
             result(null, err);
         }else{
             result(null, res);
         }
     })
 }

 Turn.createTurn = (turnData, result) => {
     dbConn.query('INSERT INTO turnos SET ? ', turnData, (err, res) => {
         if(err){
             console.log('Error while inserting data');
             result(null, err);
         }else {
             console.log('Turn created successfully');
             result(null, res)
         }
     })
 }


 Turn.updateTurn = (id, turnData, result) => {
     dbConn.query("UPDATE turnos SET nombre=?, estatus=? WHERE id_turno",[turnData.nombre, turnData.estatus, turnData.id_turno,id], (err, res) => {
         if(err){
             console.log('Error while updating the car');
             result(null, err);
         }else{
             console.log("Turn updated successfully");
             result(null, res);
         }
     });
 }

 Turn.deleteTurn = (id, result) => {
     dbConn.query('DELETE FROM turnos WHERE id_turno=?',[id],(err, res) =>{
         if(err){
             console.log('Error while deleting the turn');
             result(null, err);
         }else{
             result(null, res);
         }
     })
 }


 module.exports = Turn;