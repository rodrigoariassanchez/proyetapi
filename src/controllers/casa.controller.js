'use strict';

const Casa = require('../models/casa.model');

exports.findAll = function(req, res) {
  Casa.findAll(function(err, casa) {
    console.log('controller')
    if (err)
    res.send(err);
    console.log('res', casa);
    res.send(casa);
  });
};


exports.create = function(req, res) {
    const new_casa = new Casa(req.body);

    //handles null error 
   if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Casa.create(new_casa, function(err, casa) {
            if (err)
            res.send(err);
            res.json({error:false,message:"Casa added successfully!",data: casa});
        });
    }
};


exports.findById = function(req, res) {
    Casa.findById(req.params.id, function(err, casa) {
        if (err)
        res.send(err);
        res.json(casa);
    });
};


exports.update = function(req, res) {
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Casa.update(req.params.id, new Casa(req.body), function(err, casa) {
            if (err)
            res.send(err);
            res.json({ error:false, message: 'Casa successfully updated' });
        });
    }
  
};


exports.delete = function(req, res) {
  Casa.delete( req.params.id, function(err, casa) {
    if (err)
    res.send(err);
    res.json({ error:false, message: 'Casa successfully deleted' });
  });
};