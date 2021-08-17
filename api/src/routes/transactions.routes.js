const { Router } = require('express');
const route = Router();


const Hashing = require('../controllers/hashing')


route.get('/entry',  async (req, res) => {
    
   try {
        const {id} = req.query;
        const code = await Hashing(id)
        res.status(200).json(code) 
    } 
    catch (err){
        res.status(404).json({err: err})
    }
   
});


module.exports = route;