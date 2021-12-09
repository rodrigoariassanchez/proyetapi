 const VigilantModel = require('../models/vigilant.model');

 exports.getVigilantist = (req, res)=> {
    VigilantModel.getAllVigilant((err, vigilant) =>{
        console.log('We are here');
        if(err)
        res.send(err);
        console.log('vigilant', vigilant);
        res.send(vigilant)
    })
}

exports.getAllVigilantById = (req, res) =>{
    // console.log('get visit by id');
    VigilantModel.getAllVigilantById(req.params.id, (err, vigilant) =>{
        if(err)
        res.send(err);
        console.log('Single visited data',vigilant)
        res.send(vigilant);
    })
}

exports.createNewVigilant = (req, res) =>{
    const vigilantData = new VigilantModel(req.body);
    console.log('vigilantData',vigilantData);
    if(req.body.contructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success:false, message: 'Please fill all fields'});
    }else{
        VigilantModel.createVigilant(vigilantData, (err, vigilant) =>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'Vigilant Created Successfully', data: vigilant.insertId})
        })
    }
}

exports.updateVigilant = (req, res) => {
    const vigilantData = new VigilantModel(req.body);
    console.log('vigilantData update',vigilantData);
    if(req.body.contructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success:false, message: 'Please fill all fields'});
    }else{
        VigilantModel.updateVigilant(req.params.id, vigilantData, (err, vigilant) =>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'Vigilant Updated Successfully'})
        })
    }
}

exports.deleteVigilant = (req, res) => {
    VigilantModel.deleteVigilant(req.params.id, (err, vigilant) => {
        if(err)
        res.send(err);
        res.json({success:true, message: 'Vigilant deleted successfully'});
    });
}
