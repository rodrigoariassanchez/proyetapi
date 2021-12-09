'user strict';
var dbConn = require('./../../config/db.config');

var Residente = function(residente){
    this.nombre     = residente.nombre;
    this.app      = residente.app;
    this.apm          = residente.apm;
    this.telefono     = residente.telefono;
    this.email = residente.email;
    this.casa_id = residente.casa_id;
    //this.created_at     = new Date();
    //this.updated_at     = new Date();
};


Residente.create = function (newResidente, result) {    
    dbConn.query("INSERT INTO residentes set ?", newResidente, function (err, res) {
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


Residente.findById = function (id, result) {
    dbConn.query("Select * from residentes where id_residentes = ? ", id, function (err, res) {             
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });   
};

Residente.findAll = function (result) {
    dbConn.query("Select * from residentes", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('residentes : ', res);  
            result(null, res);
        }
    });   
};

Residente.update = function(id, residentes, result){
    dbConn.query("UPDATE residentes SET nombre=?,app=?,apm=?,telefono=?,email=?,casa_id=? WHERE id_residentes = ?", [residentes.nombre,residentes.app,residentes.apm,residentes.telefono,residentes.email,residentes.casa_id ,id], function (err, res) {
          if(err) {
              console.log("error: ", err);
              result(null, err);
          }else{   
              result(null, res);
          }
      }); 
  };

  Residente.delete = function(id, result){
    dbConn.query("DELETE FROM residentes WHERE id_residentes = ?", [id], function (err, res) {
       if(err) {
           console.log("error: ", err);
           result(null, err);
       }
       else{
           result(null, res);
       }
   }); 
};

module.exports= Residente;