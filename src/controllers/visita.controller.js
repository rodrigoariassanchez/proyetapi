const Visita = require('../models/visita.model');


exports.getVisitasList = (req, res) => {
    Visita.getAllVisitas((err, visita) => {
        console.log('Se muestran la lista de visitas');
        if (err)
            res.send(err);
        console.log('visita', visita);
        res.send(visita)
    })
}


exports.getVisitaByID = (req, res) => {
    //console.log('Obteniendo la visita con el id');
    Visita.getVisitaByID(req.params.id, (err, visita) => {
        if (err)
            res.send(err);
        console.log('single visita', visita);
        res.send(visita);
    })
}

exports.create = (req, res) => {

    const new_visita= new Visita(req.body);
   
    if (req.body.contructor === Object && Object.keys(req.body).length === 0) {
        res.send(400).send({ success: true, message: 'Please fill all fields' })
    } else {

        Visita.create(new_visita, function (err, visita)  {
            if (err)
                res.send(err);
            res.json({ status: true, message: 'Visita creada exitosamente', data:visita })
        })
    }
}

exports.update = function(req, res) {
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({error:true, message: 'Please provide all required field'});
    }else{
        Visita.update(req.params.id, new Visita(req.body), function(err, visita){
            if(err)
            res.send(err);
            res.json({error:false, message: 'Visita actualizada con exito!!!'});
        });
    }
};

exports.delete = function(req, res) {
    Visita.delete(req.params.id, function(err, visita){
        if(err)
        res.send(err);
        res.json({error:false, message: 'Visita eliminada exitosamente'});
    });
};