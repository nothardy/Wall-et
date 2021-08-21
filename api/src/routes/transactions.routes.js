const { Router } = require('express');
const route = Router();


const Hashing = require('../controllers/hashing');
const { checkout } = require('../controllers/stripeCard');

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

route.post('/card', async(req, res) => {
    try {
        const { id, accountId } = req.body;
        const amount = parseInt(req.body.amount)
        
        const info = await checkout(id, accountId, amount)
        return res.status(200).json({ msj: 'very god!!!!!!' })
        
    }   
    catch(err){
        console.error('sdsssssss', err)
        return res.status(404).send(err)
    }
})


module.exports = route;