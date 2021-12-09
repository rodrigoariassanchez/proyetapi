var dbConn = require('../../config/db.config');

var Visita = function (visita) {

    this.id_visitante = visita.id_vistante;
    this.id_residente = visita.id_residente;


}

//Obtener visitas
Visita.getAllVisitas = (result) => {
    dbConn.query('SELECT * FROM  visitas', (err, res) => {
        if (err) {
            console.log("Error", err);
            result(null, err);
        } else {
            console.log('Resultado exitoso');
            result(null, res);
        }
    })
}


Visita.getVisitaByID = (id, result) => {
    dbConn.query('SELECT * FROM visitas WHERE id=?', id, (err, res) => {
        if (err) {
            console.log('error al obtener la vista', err);
            result(null, err);
        } else {
            result(null, res);
        }
    })
}
Visita.create = function (newVisita, result) {
    dbConn.query('INSERT INTO visitas SET ?', newVisita, function (err, res) {
        if (err) {
            console.log('error', err);
            result(err, null);

        } else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};



Visita.update = function (id, visita, result) {
    dbConn.query("UPDATE  visitas SET id_visitante=?, id_residente=? WHERE id=?", [visita.id_visitante, visita.id_residente, id], function (err, res) {
        if (err) {
            console.log("error:", err);
            result(null, err);

        } else {
            result(null, res);
        }
    });
};

Visita.delete = function(id, result){
    dbConn.query("DELETE FROM visitas WHERE id = ?", [id], function(err, res){
        if(err){
            console.log("error:", err);
            result(null, err);

        }else{
            result(null, res)
        }
    });
};


module.exports = Visita;