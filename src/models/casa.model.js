'user strict';
var dbConn = require('../../config/db.config');

//Casa object create
var Casa = function(Casa){
    this.numerocasa     = Casa.numerocasa;
    this.direccion      = Casa.direccion;
    this.color          = Casa.color;
    this.referencia     = Casa.referencia;
    this.created_at     = new Date();
    this.updated_at     = new Date();
};
Casa.create = function (newCasa, result) {    
    dbConn.query("INSERT INTO casas set ?", newCasa, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });           
};
Casa.findById = function (id, result) {
    dbConn.query("Select * from casas where id_casas = ? ", id, function (err, res) {             
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });   
};
Casa.findAll = function (result) {
    dbConn.query("Select * from casas", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('Casas : ', res);  
            result(null, res);
        }
    });   
};
Casa.update = function(id, Casa, result){
  dbConn.query("UPDATE casas SET numerocasa=?,direccion=?,color=?,referencia=? WHERE id_casas = ?", [Casa.numerocasa,Casa.direccion,Casa.color,Casa.referencia, id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }else{   
            result(null, res);
        }
    }); 
};
Casa.delete = function(id, result){
    console.log(id)
     dbConn.query("DELETE FROM casas WHERE id_casas = ?", [id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    }); 
};

module.exports= Casa;