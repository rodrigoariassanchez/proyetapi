var dbConn = require('../../config/db.config');

var Vigilant = function (vigilant){
    this.nombre = vigilant.nombre;
    this.app = vigilant.app;
    this.apm = vigilant.apm;
    this.id_turno = vigilant.id_turno;
}

Vigilant.getAllVigilant = (result) =>{
    dbConn.query('SELECT v.id_vigilante, v.nombre, v.app, v.apm, v.id_turno, t.nombre AS turnos FROM vigilantes AS v INNER JOIN turnos AS t ON t.id_turno = v.id_turno ', (err, res)=>{
        if(err){
            console.log('Error while fetching vigilant', err);
            result(null, err);
        }else{
            console.log('Vigilant fetched succesfully');
            result(null,res);
        }
    })
}

Vigilant.getAllVigilantById = (id, result) => {
    dbConn.query('SELECT v.id_vigilante, v.nombre, v.app, v.apm, v.id_turno, t.nombre AS turnos FROM vigilantes AS v INNER JOIN turnos AS t ON t.id_turno = v.id_turno WHERE v.id_vigilante = ?', id, (err, res)=>{
        if(err){
            console.log('Error while fetching vigilant by id', err);
            result(null, err);
        }else{
            result(null, res);
        }
    })
}

Vigilant.createVigilant = (vigilantData, result) =>{
    dbConn.query('INSERT INTO vigilantes SET ?',vigilantData,(err, res) => {
        if(err){
            console.log('Error while inserting data');
            result(null, err);
        }else{
            console.log('Vigilant created successfully');
            result(null, res)
        }
    })
}

Vigilant.updateVigilant = (id, vigilantData, result) => {
    dbConn.query("UPDATE vigilantes SET nombre=?, app=?, apm=?, id_turno=? WHERE id_vigilante=?",[vigilantData.nombre,vigilantData.app,vigilantData.apm,vigilantData.id_turno, id], (err, res) => {
        if(err){
            console.log('Error While updating the vigilant');
            result(null, err);
        }else {
            console.log("Vigilant Updated successfully");
            result(null, res);
        }
    });
}

Vigilant.deleteVigilant = (id, result) => {
    dbConn.query('DELETE FROM vigilantes WHERE id_vigilante=?',[id],(err, res) => {
        if(err){
            console.log('Error while deleting the vigilante');
            result(null, err);
        }else {
            result(null, res);
        }
    })
}

module.exports = Vigilant;