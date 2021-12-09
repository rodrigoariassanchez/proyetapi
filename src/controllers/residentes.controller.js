'use strict';

const Residente = require('../models/residentes.model');


exports.findAll = function(req, res) {
    Residente.findAll(function(err, residentes) {
      console.log('controller')
      if (err)
      res.send(err);
      console.log('res', residentes);
      res.send(residentes);
    });
  };

exports.create = function(req, res) {
    const new_residente = new Residente(req.body);

   if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Residente.create(new_residente, function(err, residente) {
            if (err)
            res.send(err);
            res.json({error:false,message:"Residente added successfully!",data:residente});
        });
    }
};

exports.findById = function(req, res) {
    Residente.findById(req.params.id, function(err, residentes) {
        if (err)
        res.send(err);
        res.json(residentes);
    });
};

exports.update = function(req, res) {
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Residente.update(req.params.id, new Residente(req.body), function(err, residentes) {
            if (err)
            res.send(err);
            res.json({ error:false, message: 'Residentes successfully updated' });
        });
    }
  
};


exports.delete = function(req, res) {
    Residente.delete( req.params.id, function(err, residentes) {
      if (err)
      res.send(err);
      res.json({ error:false, message: 'Residente successfully deleted' });
    });
  };